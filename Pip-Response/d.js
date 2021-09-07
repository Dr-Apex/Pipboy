$(document).ready(function() {
  $(document).ready(function() {
    $('.nav.nav-tabs li a.arm').on('click', function() {
      $('.wep').addClass('o5');
      $('.wep').removeClass('o2');
      $('.arm').removeClass('o2');
      $('.arm').removeClass('o5');
      $('.aiid').addClass('o5');
      $('.aiid').removeClass('o2');
    });
    $('.nav.nav-tabs li a.aiid').on('click', function() {
      $('.wep').addClass('o2');
      $('.wep').removeClass('o5');
      $('.arm').addClass('o5');
      $('.arm').removeClass('o2');
      $('.aiid').removeClass('o2');
      $('.aiid').removeClass('o5');
    });
    $('.nav.nav-tabs li a.wep').on('click', function() {
      $('.wep').removeClass('o2');
      $('.wep').removeClass('o5');
      $('.arm').addClass('o5');
      $('.arm').removeClass('o2');
      $('.aiid').addClass('o2');
      $('.aiid').removeClass('o5');
    });
  });
  var weapons = [
    {
      "name": "boston",
      "people": 11,
      "food": 17,
      "water": 16,
      "power": 2,
      "defence": 27,
      "beds": 12,
      "happiness": 67
    },
    {
      "name": "finch",
      "people": 23,
      "food": 10,
      "water": 19,
      "power": 9,
      "defence": 37,
      "beds": 8,
      "happiness": 54
    },
    {
      "name": "greentop",
      "people": 13,
      "food": 21,
      "water": 6,
      "power": 12,
      "defence": 22,
      "beds": 16,
      "happiness": 72
    },
    {
      "name": "hangman",
      "people": 20,
      "food": 15,
      "water": 10,
      "power": 7,
      "defence": 26,
      "beds": 13,
      "happiness": 64
    },
    {
      "name": "jamaica",
      "people": 25,
      "food": 13,
      "water": 20,
      "power": 10,
      "defence": 36,
      "beds": 5,
      "happiness": 59
    },
    {
      "name": "nordhagen",
      "people": 9,
      "food": 11,
      "water": 9,
      "power": 1,
      "defence": 17,
      "beds": 8,
      "happiness": 44
    },
    {
      "name": "oberland",
      "people": 22,
      "food": 30,
      "water": 24,
      "power": 14,
      "defence": 29,
      "beds": 17,
      "happiness": 73
    }
  ]
  $('.item-list a').on('click', function(e) {
    if ($(e.currentTarget).hasClass('act')) {
        $(e.currentTarget).removeClass('act');
    }
    else {
        $(e.currentTarget).addClass('act');
    }
  });
  $('.items-list a').on('mouseenter', function(e) {
    var current_item = $(e.currentTarget).attr('class');
    console.log(current_item);
    for(item in weapons) {
      if (weapons[item].name == current_item) {
        console.log(weapons[item]);
        var container = $('.pl-st');
        container.find('.people').html(weapons[item].people);
        container.find('.food').html(weapons[item].food);
        container.find('.water').html(weapons[item].water);
        container.find('.power').html(weapons[item].power);
        container.find('.defence').html(weapons[item].defence);
        container.find('.beds').html(weapons[item].beds);
        container.find('.happiness').html(weapons[item].happiness);
      }
    }
  });
  var statt = [
    {
      "name": "general",
      "ppl": 6879,
      "animal": 789,
      "cre": 358,
      "robot": 23,
      "synth": 52,
      "turret": 17,
      "lnmy": 13,
      "critical": 834,
      "sneak": 643,
      "back": 76
    },
    {
      "name": "quest",
      "ppl": 2985,
      "animal": 743,
      "cre": 237,
      "robot": 83,
      "synth": 58,
      "turret": 32,
      "lnmy": 15,
      "critical": 654,
      "sneak": 564,
      "back": 24
    },
    {
      "name": "combat",
      "ppl": 7835,
      "animal": 638,
      "cre": 467,
      "robot": 66,
      "synth": 45,
      "turret": 43,
      "lnmy": 23,
      "critical": 736,
      "sneak": 532,
      "back": 60
    },
    {
      "name": "crafting",
      "ppl": 1639,
      "animal": 589,
      "cre": 270,
      "robot": 34,
      "synth": 63,
      "turret": 12,
      "lnmy": 6,
      "critical": 825,
      "sneak": 54,
      "back": 23
    },
    {
      "name": "crime",
      "ppl": 1190,
      "animal": 517,
      "cre": 96,
      "robot": 52,
      "synth": 37,
      "turret": 22,
      "lnmy": 7,
      "critical": 767,
      "sneak": 73,
      "back": 40
    }
  ]
  $('.items-list a').on('mouseenter', function(e) {
    var current_item = $(e.currentTarget).attr('class');
    console.log(current_item);
    for(item in statt) {
      if (statt[item].name == current_item) {
        console.log(statt[item]);
        var container = $('.it-st');
        container.find('.ppl').html(statt[item].ppl);
        container.find('.animal').html(statt[item].animal);
        container.find('.cre').html(statt[item].cre);
        container.find('.robot').html(statt[item].robot);
        container.find('.synth').html(statt[item].synth);
        container.find('.turret').html(statt[item].turret);
        container.find('.lnmy').html(statt[item].lnmy);
        container.find('.critical').html(statt[item].critical);
        container.find('.sneak').html(statt[item].sneak);
        container.find('.back').html(statt[item].back);
      }
    }
  });
});
