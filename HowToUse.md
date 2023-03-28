
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
                "title": "test",
                "imgPath": "test",
                "genres": [
                    {
                        "id":1,
                        "name":"western"
                    },
                    {
                        "id":2,
                        "name":"western"
                    }
                ],
                "year": 2003,
                "rating": 7.8,
                "synopsis": "un film de test",
                "id":0
            },
            {
                "title": "test",
                "imgPath": "test",
                "genres": [
                    {
                        "id":1,
                        "name":"western"
                    },
                    {
                        "id":2,
                        "name":"western"
                    }
                ],
                "year": 2003,
                "rating": 7.8,
                "synopsis": "un film de test",
                "id":1
            },
            {
                "title": "test",
                "imgPath": "test",
                "genres": [
                    {
                        "id":1,
                        "name":"western"
                    },
                    {
                        "id":2,
                        "name":"western"
                    }
                ],
                "year": 2003,
                "rating": 7.8,
                "synopsis": "un film de test",
                "id":2
            }
    ]
}
```

### returns (à celui qui a créé la partie):
```json
{
    "type":"newGameSuccess",
    "gameId":"[id de la partie]"
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
    "yourId": 1,
    "game": {
        "id": 434740,
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
                    {
                        "id": 1,
                        "name": "western"
                    },
                    {
                        "id": 2,
                        "name": "western"
                    }
                ],
                "year": 2003,
                "rating": 7.8,
                "synopsis": "un film de test",
                "id": 0
            },
            {
                "title": "test",
                "imgPath": "test",
                "genres": [
                    {
                        "id": 1,
                        "name": "western"
                    },
                    {
                        "id": 2,
                        "name": "western"
                    }
                ],
                "year": 2003,
                "rating": 7.8,
                "synopsis": "un film de test",
                "id": 1
            },
            {
                "title": "test",
                "imgPath": "test",
                "genres": [
                    {
                        "id": 1,
                        "name": "western"
                    },
                    {
                        "id": 2,
                        "name": "western"
                    }
                ],
                "year": 2003,
                "rating": 7.8,
                "synopsis": "un film de test",
                "id": 2
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

## LeaveGame : <hr>
```json
{
    "type":"leaveGame",
    "gameId":"[id de la partie]"
}
```

### Return (à tous sauf celui qui à quitté):
```json
{
    "type": "playerLeft",
    "userId": 3
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
        "id": 434740,
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
                    {
                        "id": 1,
                        "name": "western"
                    },
                    {
                        "id": 2,
                        "name": "western"
                    }
                ],
                "year": 2003,
                "rating": 7.8,
                "synopsis": "un film de test",
                "id": 0
            },
            {
                "title": "test",
                "imgPath": "test",
                "genres": [
                    {
                        "id": 1,
                        "name": "western"
                    },
                    {
                        "id": 2,
                        "name": "western"
                    }
                ],
                "year": 2003,
                "rating": 7.8,
                "synopsis": "un film de test",
                "id": 1
            },
            {
                "title": "test",
                "imgPath": "test",
                "genres": [
                    {
                        "id": 1,
                        "name": "western"
                    },
                    {
                        "id": 2,
                        "name": "western"
                    }
                ],
                "year": 2003,
                "rating": 7.8,
                "synopsis": "un film de test",
                "id": 2
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
            "title": "test",
            "imgPath": "test",
            "genres": [
                {
                    "id": 1,
                    "name": "western"
                },
                {
                    "id": 2,
                    "name": "western"
                }
            ],
            "year": 2003,
            "rating": 7.8,
            "synopsis": "un film de test",
            "id": 0
        },
        {
            "title": "test",
            "imgPath": "test",
            "genres": [
                {
                    "id": 1,
                    "name": "western"
                },
                {
                    "id": 2,
                    "name": "western"
                }
            ],
            "year": 2003,
            "rating": 7.8,
            "synopsis": "un film de test",
            "id": 1
        },
        {
            "title": "test",
            "imgPath": "test",
            "genres": [
                {
                    "id": 1,
                    "name": "western"
                },
                {
                    "id": 2,
                    "name": "western"
                }
            ],
            "year": 2003,
            "rating": 7.8,
            "synopsis": "un film de test",
            "id": 2
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
                    {
                        "id": 1,
                        "name": "western"
                    },
                    {
                        "id": 2,
                        "name": "western"
                    }
                ],
                "year": 2003,
                "rating": 7.8,
                "synopsis": "un film de test",
                "id": 0
            },
            {
                "title": "test",
                "imgPath": "test",
                "genres": [
                    {
                        "id": 1,
                        "name": "western"
                    },
                    {
                        "id": 2,
                        "name": "western"
                    }
                ],
                "year": 2003,
                "rating": 7.8,
                "synopsis": "un film de test",
                "id": 1
            },
            {
                "title": "test",
                "imgPath": "test",
                "genres": [
                    {
                        "id": 1,
                        "name": "western"
                    },
                    {
                        "id": 2,
                        "name": "western"
                    }
                ],
                "year": 2003,
                "rating": 7.8,
                "synopsis": "un film de test",
                "id": 2
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
        "id": 466390,
        "participants": [
            {
                "id": 0,
                "pseudo": "Phillipe",
                "likedFilms": [
                    {
                        "title": "test",
                        "imgPath": "test",
                        "genres": [
                            {
                                "id": 1,
                                "name": "western"
                            },
                            {
                                "id": 2,
                                "name": "western"
                            }
                        ],
                        "year": 2003,
                        "rating": 7.8,
                        "synopsis": "un film de test",
                        "id": 0
                    },
                    {
                        "title": "test",
                        "imgPath": "test",
                        "genres": [
                            {
                                "id": 1,
                                "name": "western"
                            },
                            {
                                "id": 2,
                                "name": "western"
                            }
                        ],
                        "year": 2003,
                        "rating": 7.8,
                        "synopsis": "un film de test",
                        "id": 1
                    },
                    {
                        "title": "test",
                        "imgPath": "test",
                        "genres": [
                            {
                                "id": 1,
                                "name": "western"
                            },
                            {
                                "id": 2,
                                "name": "western"
                            }
                        ],
                        "year": 2003,
                        "rating": 7.8,
                        "synopsis": "un film de test",
                        "id": 2
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
                            {
                                "id": 1,
                                "name": "western"
                            },
                            {
                                "id": 2,
                                "name": "western"
                            }
                        ],
                        "year": 2003,
                        "rating": 7.8,
                        "synopsis": "un film de test",
                        "id": 0
                    },
                    {
                        "title": "test",
                        "imgPath": "test",
                        "genres": [
                            {
                                "id": 1,
                                "name": "western"
                            },
                            {
                                "id": 2,
                                "name": "western"
                            }
                        ],
                        "year": 2003,
                        "rating": 7.8,
                        "synopsis": "un film de test",
                        "id": 1
                    },
                    {
                        "title": "test",
                        "imgPath": "test",
                        "genres": [
                            {
                                "id": 1,
                                "name": "western"
                            },
                            {
                                "id": 2,
                                "name": "western"
                            }
                        ],
                        "year": 2003,
                        "rating": 7.8,
                        "synopsis": "un film de test",
                        "id": 2
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
                        {
                            "id": 1,
                            "name": "western"
                        },
                        {
                            "id": 2,
                            "name": "western"
                        }
                    ],
                    "year": 2003,
                    "rating": 7.8,
                    "synopsis": "un film de test",
                    "id": 0
                },
                {
                    "title": "test",
                    "imgPath": "test",
                    "genres": [
                        {
                            "id": 1,
                            "name": "western"
                        },
                        {
                            "id": 2,
                            "name": "western"
                        }
                    ],
                    "year": 2003,
                    "rating": 7.8,
                    "synopsis": "un film de test",
                    "id": 1
                },
                {
                    "title": "test",
                    "imgPath": "test",
                    "genres": [
                        {
                            "id": 1,
                            "name": "western"
                        },
                        {
                            "id": 2,
                            "name": "western"
                        }
                    ],
                    "year": 2003,
                    "rating": 7.8,
                    "synopsis": "un film de test",
                    "id": 2
                }
            ]
        },
        "foundFilms": [
            {
                "title": "test",
                "imgPath": "test",
                "genres": [
                    {
                        "id": 1,
                        "name": "western"
                    },
                    {
                        "id": 2,
                        "name": "western"
                    }
                ],
                "year": 2003,
                "rating": 7.8,
                "synopsis": "un film de test",
                "id": 0
            },
            {
                "title": "test",
                "imgPath": "test",
                "genres": [
                    {
                        "id": 1,
                        "name": "western"
                    },
                    {
                        "id": 2,
                        "name": "western"
                    }
                ],
                "year": 2003,
                "rating": 7.8,
                "synopsis": "un film de test",
                "id": 1
            },
            {
                "title": "test",
                "imgPath": "test",
                "genres": [
                    {
                        "id": 1,
                        "name": "western"
                    },
                    {
                        "id": 2,
                        "name": "western"
                    }
                ],
                "year": 2003,
                "rating": 7.8,
                "synopsis": "un film de test",
                "id": 2
            }
        ]
    }
}
```