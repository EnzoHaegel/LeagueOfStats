const express = require('express');
const router = express.Router();
const https = require('https');
const http = require('http');
const API_KEY = "RGAPI-aeadf427-c838-482f-a958-2e6a71864af4"
const fs = require('fs');

function saveResponsesInDirectory(req, body, next) {
    let path = req.originalUrl;
    let response = body;
    let fileName = path.split("/api/")[1];
    if (!fs.existsSync('./responses')) {
        fs.mkdirSync('./responses');
    }
    // create all directories and subdirectory of filName if they don't exist
    let directories = fileName.split("/");
    let currentPath = "./responses";
    for (let i = 0; i < directories.length - 1; i++) {
        if (!fs.existsSync(currentPath + "/" + directories[i])) {
            fs.mkdirSync(currentPath + "/" + directories[i]);
        }
        currentPath += "/" + directories[i];
    }
    let filePath = "./responses/" + fileName + ".json";
    let json = JSON.stringify(response);
    fs.writeFile(filePath, json, function (err) {
        if (err) {
            console.log(err);
        }
    });
    next();
}

function checkIfResponsesExist(req, res, next) {
    if (req.headers.origin != 'http://localhost:4200') {
        next();
    }
    let path = req.originalUrl;
    let fileName = path.split("/api/")[1];
    let filePath = "./responses/" + fileName + ".json";
    if (fs.existsSync(filePath)) {
        let json = fs.readFileSync(filePath);
        let response = JSON.parse(json);
        res.json(response);
        console.log("Responses from file:", fileName);
    } else {
        next();
    }
}

// a function that log requests
function checkLocalhost (req, res, next) {
    console.log('Route:', req.url, ' From:', req.headers.origin, '  Date:', new Date().toLocaleString());
    next();
}

function getRegionFromQuery(req) {
    const region = req.query.region;
    switch (region) {
        case 'br':
            return 'br1';
        case 'eun':
            return 'eun1';
        case 'euw':
            return 'euw1';
        case 'jp':
            return 'jp1';
        case 'kr':
            return 'kr';
        case 'la':
            return 'la1';
        case 'la2':
            return 'la2';
        case 'na':
            return 'na1';
        case 'oc':
            return 'oc1';
        case 'tr':
            return 'tr1';
        case 'ru':
            return 'ru';
        default:
            return 'euw1';
    }
}

router.get('/', checkLocalhost, checkIfResponsesExist, (req, res) => {
    res.status(200).json({ message: 'API works' });
});

// https://${region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/
router.get('/summoner/:summonerName', checkLocalhost, checkIfResponsesExist, (req, res) => {
    const summonerName = req.params.summonerName;
    const region = getRegionFromQuery(req);
    const url = `https://${region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${API_KEY}`;
    https.get(url, (response) => {
        let body = '';
        response.on('data', (chunk) => {
            body += chunk;
        });
        response.on('end', () => {
            const parsed = JSON.parse(body);
            saveResponsesInDirectory(req, parsed, () => {
                res.status(200).json(parsed);
            });
        });
    });
});

// get summoner by summoner puuid
router.get('/summoner/puuid/:summonerPuuid', checkLocalhost, checkIfResponsesExist, (req, res) => {
    const summonerPuuid = req.params.summonerPuuid;
    const region = getRegionFromQuery(req);
    const url = `https://${region}.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/${summonerPuuid}?api_key=${API_KEY}`;
    https.get(url, (response) => {
        let body = '';
        response.on('data', (chunk) => {
            body += chunk;
        });
        response.on('end', () => {
            const parsed = JSON.parse(body);
            saveResponsesInDirectory(req, parsed, () => {
                res.status(200).json(parsed);
            });
        });
    });
});

// https://${region}.api.riotgames.com/lol/league/v4/entries/by-summoner/
router.get('/league/:summonerId', checkLocalhost, checkIfResponsesExist, (req, res) => {
    const summonerId = req.params.summonerId;
    const region = getRegionFromQuery(req);
    const url = `https://${region}.api.riotgames.com/lol/league/v4/entries/by-summoner/${summonerId}?api_key=${API_KEY}`;
    https.get(url, (response) => {
        let body = '';
        response.on('data', (chunk) => {
            body += chunk;
        });
        response.on('end', () => {
            const parsed = JSON.parse(body);
            saveResponsesInDirectory(req, parsed, () => {
                res.status(200).json(parsed);
            });
        });
    });
});

// https://${region}.api.riotgames.com/lol/match/v5/matches/by-puuid/
router.get('/matches/:summonerId', checkLocalhost, checkIfResponsesExist, (req, res) => {
    const summonerId = req.params.summonerId;
    // get start and count from query params
    const start = req.query.start;
    const count = req.query.count;
    let url = `https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/${summonerId}/ids?api_key=${API_KEY}`;
    url += `&start=${start}&count=${count}`;
    https.get(url, (response) => {
        let body = '';
        response.on('data', (chunk) => {
            body += chunk;
        });
        response.on('end', () => {
            const parsed = JSON.parse(body);
            res.status(200).json(parsed);
        });
    });
});

// https://${region}.api.riotgames.com/lol/match/v5/matches/
router.get('/match/:matchId', checkLocalhost, checkIfResponsesExist, (req, res) => {
    const matchId = req.params.matchId;
    const url = `https://europe.api.riotgames.com/lol/match/v5/matches/${matchId}?api_key=${API_KEY}`;
    https.get(url, (response) => {
        let body = '';
        response.on('data', (chunk) => {
            body += chunk;
        });
        response.on('end', () => {
            const parsed = JSON.parse(body);
            saveResponsesInDirectory(req, parsed, () => {
                res.status(200).json(parsed);
            });
        });
    });
});

// http://ddragon.leagueoflegends.com/cdn/' + version + '/data/fr_FR/champion.json
router.get('/championName/:id', checkLocalhost, checkIfResponsesExist, (req, res) => {
    const id = req.params.id;
    const region = getRegionFromQuery(req);
    const url = `http://ddragon.leagueoflegends.com/cdn/12.6.1/data/fr_FR/champion.json`;
    http.get(url, (response) => {
        let body = '';
        response.on('data', (chunk) => {
            body += chunk;
        });
        response.on('end', () => {
            const parsed = JSON.parse(body);
            const data = Object.values(parsed.data);
            const champion = data.find(champion => champion.key === id);
            saveResponsesInDirectory(req, champion, () => {
                res.status(200).json(champion);
            });
        });
    });
});

router.get('/allChampionName', checkLocalhost, checkIfResponsesExist, (req, res) => {
    const url = `http://ddragon.leagueoflegends.com/cdn/12.6.1/data/fr_FR/champion.json`;
    https.get(url, (response) => {
        let body = '';
        response.on('data', (chunk) => {
            body += chunk;
        });
        response.on('end', () => {
            const parsed = JSON.parse(body);
            const championName = parsed.data;
            saveResponsesInDirectory(req, { championName }, () => {
                res.status(200).json({ championName });
            });
        });
    });
});

// get rank player info depend of username
router.get('/rank/:summonerName', checkLocalhost, checkIfResponsesExist, (req, res) => {
    const summonerName = req.params.summonerName;
    // get encryptedSummonerId from summonerName
    const region = getRegionFromQuery(req);
    const url = `https://${region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${API_KEY}`;
    https.get(url, (response) => {
        let body = '';
        response.on('data', (chunk) => {
            body += chunk;
        });
        response.on('end', () => {
            const parsed = JSON.parse(body);
            const encryptedSummonerId = parsed.id;
            // get rank player info depend of encryptedSummonerId
            const url = `https://${region}.api.riotgames.com/lol/league/v4/entries/by-summoner/${encryptedSummonerId}?api_key=${API_KEY}`;
            https.get(url, (response) => {
                let body = '';
                response.on('data', (chunk) => {
                    body += chunk;
                });
                response.on('end', () => {
                    const parsed = JSON.parse(body);
                    saveResponsesInDirectory(req, parsed, () => {
                        res.status(200).json(parsed);
                    });
                });
            });
        });
    });
});

// https://${region}.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/
router.get('/masteries/:summonerId', checkLocalhost, checkIfResponsesExist, (req, res) => {
    const summonerId = req.params.summonerId;
    const region = getRegionFromQuery(req);
    const url = `https://${region}.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${summonerId}?api_key=${API_KEY}`;
    https.get(url, (response) => {
        let body = '';
        response.on('data', (chunk) => {
            body += chunk;
        });
        response.on('end', () => {
            const parsed = JSON.parse(body);
            saveResponsesInDirectory(req, parsed, () => {
                res.status(200).json(parsed);
            });
        });
    });
});

// https://${region}.api.riotgames.com/lol/spectator/v4/active-games/by-summoner/Os_pok6009bWwaD2SMmBT1DoASK7F_w8jXeS-5-6YpZgZbY
router.get('/active-games/:summonerId', checkLocalhost, checkIfResponsesExist, (req, res) => {
    const summonerId = req.params.summonerId;
    const region = getRegionFromQuery(req);
    const url = `https://${region}.api.riotgames.com/lol/spectator/v4/active-games/by-summoner/${summonerId}?api_key=${API_KEY}`;
    https.get(url, (response) => {
        let body = '';
        response.on('data', (chunk) => {
            body += chunk;
        });
        response.on('end', () => {
            const parsed = JSON.parse(body);
            res.status(200).json(parsed);
        });
    });
});

module.exports = router;
