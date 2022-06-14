const express = require('express');
const router = express.Router();
const https = require('https');
const http = require('http');
const API_KEY = "RGAPI-af2908b3-a299-4627-9a5e-a5a2202397ef"

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

router.get('/', checkLocalhost, (req, res) => {
    res.status(200).json({ message: 'API works' });
});

// https://${region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/
router.get('/summoner/:summonerName', checkLocalhost, (req, res) => {
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
            res.status(200).json(parsed);
        });
    });
});

// get summoner by summoner puuid
router.get('/summoner/puuid/:summonerPuuid', checkLocalhost, (req, res) => {
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
            res.status(200).json(parsed);
        });
    });
});

// https://${region}.api.riotgames.com/lol/league/v4/entries/by-summoner/
router.get('/league/:summonerId', checkLocalhost, (req, res) => {
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
            res.status(200).json(parsed);
        });
    });
});

// https://${region}.api.riotgames.com/lol/match/v5/matches/by-puuid/
router.get('/matches/:summonerId', checkLocalhost, (req, res) => {
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
router.get('/match/:matchId', checkLocalhost, (req, res) => {
    const matchId = req.params.matchId;
    const url = `https://europe.api.riotgames.com/lol/match/v5/matches/${matchId}?api_key=${API_KEY}`;
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

// http://ddragon.leagueoflegends.com/cdn/' + version + '/data/fr_FR/champion.json
router.get('/championName/:id', checkLocalhost, (req, res) => {
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
            res.status(200).json(champion.id);
        });
    });
});

router.get('/allChampionName', checkLocalhost, (req, res) => {
    const url = `http://ddragon.leagueoflegends.com/cdn/12.6.1/data/fr_FR/champion.json`;
    https.get(url, (response) => {
        let body = '';
        response.on('data', (chunk) => {
            body += chunk;
        });
        response.on('end', () => {
            const parsed = JSON.parse(body);
            const championName = parsed.data;
            res.status(200).json({ championName });
        });
    });
});

// get rank player info depend of username
router.get('/rank/:summonerName', checkLocalhost, (req, res) => {
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
                    res.status(200).json(parsed);
                });
            });
        });
    });
});

// https://${region}.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/
router.get('/masteries/:summonerId', checkLocalhost, (req, res) => {
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
            res.status(200).json(parsed);
        });
    });
});

// https://${region}.api.riotgames.com/lol/spectator/v4/active-games/by-summoner/Os_pok6009bWwaD2SMmBT1DoASK7F_w8jXeS-5-6YpZgZbY
router.get('/active-games/:summonerId', checkLocalhost, (req, res) => {
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
