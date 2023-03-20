
# Note random :
```
Client peut :
- Créer partie
- Rejoindre partie
- Démarrer la partie
- Enovoyer résultat

Serveur peut :
- Envoyer les infos sur la partie
```

# JSON :
## CreateGame : <hr>
```json
{
    "type" : "newGame",
    "hostName" : "Phillipe",
    "films" : [
        {
            "title" : "test",
            "imgPath" : "test", 
            "genres" : [2,3], 
            "year" : 2003, 
            "rating" : 7.8, 
            "synopsis" : "un film de test"
        },
        {
            "title" : "test",
            "imgPath" : "test", 
            "genres" : [2,3], 
            "year" : 2003, 
            "rating" : 7.8, 
            "synopsis" : "un film de test"
        },
        {
            "title" : "test",
            "imgPath" : "test", 
            "genres" : [2,3], 
            "year" : 2003, 
            "rating" : 7.8, 
            "synopsis" : "un film de test"
        }
    ]
}
```

### returns (à celui qui a créé la partie):
```json
{
    "type":"newGameSuccess"
}
```

## JoinGame : <hr>
```json
{
    "type" : "joinGame",
    "userName" : "michealBay",
    "gameId" : "[id de la partie]"
}
```

### returns (à celui qui rejoint) :
```json
{
    "type": "joinGameSuccess",
    "game": {
        "id": 11076,
        "participants": [
            {
                "id": 0,
                "pseudo": "Phillipe",
                "likedFilms": []
            },
            {
                "id": 1,
                "pseudo": "michealBay",
                "likedFilms": []
            },
            {
                "id": 2,
                "pseudo": "michealBay",
                "likedFilms": []
            }
        ],
        "host": {
            "id": 0,
            "pseudo": "Phillipe",
            "likedFilms": []
        },
        "foundFilms": [
            {
                "title": "test",
                "imgPath": "test",
                "genres": [
                    2,
                    3
                ],
                "year": 2003,
                "rating": 7.8,
                "synopsis": "un film de test"
            },
            {
                "title": "test",
                "imgPath": "test",
                "genres": [
                    2,
                    3
                ],
                "year": 2003,
                "rating": 7.8,
                "synopsis": "un film de test"
            },
            {
                "title": "test",
                "imgPath": "test",
                "genres": [
                    2,
                    3
                ],
                "year": 2003,
                "rating": 7.8,
                "synopsis": "un film de test"
            }
        ]
    }
}
```

### returns (à tout les autres participants) :
```json
{
    "type": "newPlayer",
    "user": {
        "id": 2,
        "pseudo": "michealBay",
        "likedFilms": []
    }
}
```

## StartGame : <hr>
```json
{
    "type" : "startGame",
    "gameId" : "[id de la partie]"
}
```

### returns :
```json
{
    "type": "startGame",
    "game": {
        "id": 11076,
        "participants": [
            {
                "id": 0,
                "pseudo": "Phillipe",
                "likedFilms": []
            },
            {
                "id": 1,
                "pseudo": "michealBay",
                "likedFilms": []
            },
            {
                "id": 2,
                "pseudo": "michealBay",
                "likedFilms": []
            }
        ],
        "host": {
            "id": 0,
            "pseudo": "Phillipe",
            "likedFilms": []
        },
        "foundFilms": [
            {
                "title": "test",
                "imgPath": "test",
                "genres": [
                    2,
                    3
                ],
                "year": 2003,
                "rating": 7.8,
                "synopsis": "un film de test"
            },
            {
                "title": "test",
                "imgPath": "test",
                "genres": [
                    2,
                    3
                ],
                "year": 2003,
                "rating": 7.8,
                "synopsis": "un film de test"
            },
            {
                "title": "test",
                "imgPath": "test",
                "genres": [
                    2,
                    3
                ],
                "year": 2003,
                "rating": 7.8,
                "synopsis": "un film de test"
            }
        ]
    }
}
```

## SendResult : <hr>
```json
{
    "type" : "sendResult",
    "gameId" : "[id de la partie]",
    "likedFilms" : [
        {
            "title" : "test",
            "imgPath" : "test", 
            "genres" : [2,3], 
            "year" : 2003, 
            "rating" : 7.8, 
            "synopsis" : "un film de test"
        },
        {
            "title" : "test",
            "imgPath" : "test", 
            "genres" : [2,3], 
            "year" : 2003, 
            "rating" : 7.8, 
            "synopsis" : "un film de test"
        },
        {
            "title" : "test",
            "imgPath" : "test", 
            "genres" : [2,3], 
            "year" : 2003, 
            "rating" : 7.8, 
            "synopsis" : "un film de test"
        }
    ]
}
```

### Returns (à tous sauf l'envoyeur) :
```json
{
    "type": "newResult",
    "user": {
        "id": 1,
        "pseudo": "michealBay",
        "likedFilms": [
            {
                "title": "test",
                "imgPath": "test",
                "genres": [
                    2,
                    3
                ],
                "year": 2003,
                "rating": 7.8,
                "synopsis": "un film de test"
            },
            {
                "title": "test",
                "imgPath": "test",
                "genres": [
                    2,
                    3
                ],
                "year": 2003,
                "rating": 7.8,
                "synopsis": "un film de test"
            },
            {
                "title": "test",
                "imgPath": "test",
                "genres": [
                    2,
                    3
                ],
                "year": 2003,
                "rating": 7.8,
                "synopsis": "un film de test"
            }
        ]
    }
}
```

## Ending Game : <hr>
```json
{
    "type":"stopGame",
    "gameId":"[id de la partie]"
}
```

### Returns :
```json
{
    "type": "stopGame",
    "game": {
        "id": 336394,
        "participants": [
            {
                "id": 0,
                "pseudo": "Phillipe",
                "likedFilms": [
                    {
                        "title": "test",
                        "imgPath": "test",
                        "genres": [
                            2,
                            3
                        ],
                        "year": 2003,
                        "rating": 7.8,
                        "synopsis": "un film de test"
                    },
                    {
                        "title": "test",
                        "imgPath": "test",
                        "genres": [
                            2,
                            3
                        ],
                        "year": 2003,
                        "rating": 7.8,
                        "synopsis": "un film de test"
                    },
                    {
                        "title": "test",
                        "imgPath": "test",
                        "genres": [
                            2,
                            3
                        ],
                        "year": 2003,
                        "rating": 7.8,
                        "synopsis": "un film de test"
                    }
                ]
            },
            {
                "id": 1,
                "pseudo": "michealBay",
                "likedFilms": [
                    {
                        "title": "test",
                        "imgPath": "test",
                        "genres": [
                            2,
                            3
                        ],
                        "year": 2003,
                        "rating": 7.8,
                        "synopsis": "un film de test"
                    },
                    {
                        "title": "test",
                        "imgPath": "test",
                        "genres": [
                            2,
                            3
                        ],
                        "year": 2003,
                        "rating": 7.8,
                        "synopsis": "un film de test"
                    },
                    {
                        "title": "test",
                        "imgPath": "test",
                        "genres": [
                            2,
                            3
                        ],
                        "year": 2003,
                        "rating": 7.8,
                        "synopsis": "un film de test"
                    }
                ]
            }
        ],
        "host": {
            "id": 0,
            "pseudo": "Phillipe",
            "likedFilms": [
                {
                    "title": "test",
                    "imgPath": "test",
                    "genres": [
                        2,
                        3
                    ],
                    "year": 2003,
                    "rating": 7.8,
                    "synopsis": "un film de test"
                },
                {
                    "title": "test",
                    "imgPath": "test",
                    "genres": [
                        2,
                        3
                    ],
                    "year": 2003,
                    "rating": 7.8,
                    "synopsis": "un film de test"
                },
                {
                    "title": "test",
                    "imgPath": "test",
                    "genres": [
                        2,
                        3
                    ],
                    "year": 2003,
                    "rating": 7.8,
                    "synopsis": "un film de test"
                }
            ]
        },
        "foundFilms": [
            {
                "title": "test",
                "imgPath": "test",
                "genres": [
                    2,
                    3
                ],
                "year": 2003,
                "rating": 7.8,
                "synopsis": "un film de test"
            },
            {
                "title": "test",
                "imgPath": "test",
                "genres": [
                    2,
                    3
                ],
                "year": 2003,
                "rating": 7.8,
                "synopsis": "un film de test"
            },
            {
                "title": "test",
                "imgPath": "test",
                "genres": [
                    2,
                    3
                ],
                "year": 2003,
                "rating": 7.8,
                "synopsis": "un film de test"
            }
        ]
    }
}
```