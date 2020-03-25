import { fromJSGreedy } from '../../src/immutable';

test('fromJSGreedy', () => {
  const departments = [
    {
      id:                 1,
      parent:             null,
      children:           [],
      title:              'Support',
      user_title:         'Support',
      is_tickets_enabled: true,
      is_chat_enabled:    false,
      display_order:      0,
      avatar:             {
        default_url_pattern: 'http://deskpro5.local/file.php/o-avatar/default?s={{IMG_SIZE}}&size-fit=1',
        url_pattern:         null,
        base_gravatar_url:   null
      },
      brands: [
        1
      ]
    },
    {
      id:                 2,
      parent:             null,
      children:           [],
      title:              'Sales',
      user_title:         'Sales',
      is_tickets_enabled: true,
      is_chat_enabled:    false,
      display_order:      0,
      avatar:             {
        default_url_pattern: 'http://deskpro5.local/file.php/o-avatar/default?s={{IMG_SIZE}}&size-fit=1',
        url_pattern:         null,
        base_gravatar_url:   null
      },
      brands: [
        1
      ]
    },
    {
      id:                 3,
      parent:             null,
      children:           [],
      title:              'Support',
      user_title:         'Support',
      is_tickets_enabled: false,
      is_chat_enabled:    true,
      display_order:      0,
      avatar:             {
        default_url_pattern: 'http://deskpro5.local/file.php/o-avatar/default?s={{IMG_SIZE}}&size-fit=1',
        url_pattern:         null,
        base_gravatar_url:   null
      },
      brands: [
        1
      ]
    },
    {
      id:                 4,
      parent:             null,
      children:           [],
      title:              'Sales',
      user_title:         'Sales',
      is_tickets_enabled: false,
      is_chat_enabled:    true,
      display_order:      0,
      avatar:             {
        default_url_pattern: 'http://deskpro5.local/file.php/o-avatar/default?s={{IMG_SIZE}}&size-fit=1',
        url_pattern:         null,
        base_gravatar_url:   null
      },
      brands: [
        1
      ]
    },
    {
      id:                 5,
      parent:             null,
      children:           [],
      title:              'Widgets',
      user_title:         'Widgets',
      is_tickets_enabled: true,
      is_chat_enabled:    false,
      display_order:      0,
      avatar:             {
        default_url_pattern: 'http://deskpro5.local/file.php/o-avatar/default?s={{IMG_SIZE}}&size-fit=1',
        url_pattern:         null,
        base_gravatar_url:   null
      },
      brands: [
        1
      ]
    },
    {
      id:       6,
      parent:   null,
      children: [
        7,
        8
      ],
      title:              'Regulation and Control of Magical Creatures',
      user_title:         'Regulation and Control of Magical Creatures',
      is_tickets_enabled: true,
      is_chat_enabled:    false,
      display_order:      1,
      avatar:             {
        default_url_pattern: 'http://deskpro5.local/file.php/o-avatar/default?s={{IMG_SIZE}}&size-fit=1',
        url_pattern:         null,
        base_gravatar_url:   null
      },
      brands: []
    },
    {
      id:                 7,
      parent:             6,
      children:           [],
      title:              'Regulation',
      user_title:         'Regulation',
      is_tickets_enabled: true,
      is_chat_enabled:    false,
      display_order:      2,
      avatar:             {
        default_url_pattern: 'http://deskpro5.local/file.php/o-avatar/default?s={{IMG_SIZE}}&size-fit=1',
        url_pattern:         null,
        base_gravatar_url:   null
      },
      brands: [
        1
      ]
    },
    {
      id:                 8,
      parent:             6,
      children:           [],
      title:              'Control',
      user_title:         'Control',
      is_tickets_enabled: true,
      is_chat_enabled:    false,
      display_order:      3,
      avatar:             {
        default_url_pattern: 'http://deskpro5.local/file.php/o-avatar/default?s={{IMG_SIZE}}&size-fit=1',
        url_pattern:         null,
        base_gravatar_url:   null
      },
      brands: [
        1
      ]
    },
    {
      id:                 9,
      parent:             null,
      children:           [],
      title:              'Hotdogs',
      user_title:         'Hotdogs',
      is_tickets_enabled: true,
      is_chat_enabled:    false,
      display_order:      4,
      avatar:             {
        default_url_pattern: 'http://deskpro5.local/file.php/o-avatar/default?s={{IMG_SIZE}}&size-fit=1',
        url_pattern:         null,
        base_gravatar_url:   null
      },
      brands: [
        1
      ]
    }
  ];
  const result = fromJSGreedy(departments);
  expect(result.getIn([0, 'title'])).toBe('Support');
});
