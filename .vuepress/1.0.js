module.exports = [
  {
    title: 'Getting Started',
    collapsable: false,
    children: prefix('getting-started', [
      '',
      'core-concepts',
      'directory-structure',
    ]),
  },
  {
    title: 'Servers',
    collapsable: false,
    children: prefix('servers', [
      '',
      'events',
    ]),
  },
  {
    title: 'Schemas',
    collapsable: false,
    children: prefix('schemas', [
      '',
      'identifier',
      'attributes',
      'relationships',
      'filters',
      'include-paths',
    ]),
  },
  {
    title: 'API Resources',
    collapsable: false,
    children: prefix('resources', [
      '',
      'attributes',
      'relationships',
      'meta',
      'links',
    ]),
  },
  {
    title: 'Routing',
    collapsable: false,
    children: prefix('routing', [
      '',
      'controllers',
      'writing-actions',
    ]),
  },
  {
    title: 'Requests',
    collapsable: false,
    children: prefix('requests', [
      '',
      'authorization',
      'compliance',
      'resources',
      'query-parameters',
    ]),
  },
  {
    title: 'Responses',
    collapsable: false,
    children: prefix('responses', [
      '',
      'errors',
    ]),
  },
  {
    title: 'Digging Deeper',
    collapsable: false,
    children: prefix('digging-deeper', [
      'localisation',
    ]),
  }
];

function prefix(prefix, children) {
    return children.map(child => `${prefix}/${child}`)
}
