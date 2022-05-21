db.createUser(
  {
    user: 'admin',
    pwd: 'admin',
    roles: [{
      'role': 'readWrite',
      'db': 'recipesAppDb',
    },
      {
        'role': 'dbAdmin',
        'db': 'recipesAppDb',
      },
      {
        'role': 'dbOwner',
        'db': 'recipesAppDb',
      },
      {
        'role': 'clusterMonitor',
        'db': 'admin',
      },
      {
        'role': 'dbAdmin',
        'db': 'recipesAppDb',
      },
    ],
  },
);