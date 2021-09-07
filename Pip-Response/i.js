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
      "name": "44_pistol",
      "damage": 48,
      "fire_rate": 6,
      "range": 119,
      "accuracy": 66,
      "weight": 4.2,
      "value": 99
    },
    {
      "name": "10mm_pistol",
      "damage": 18,
      "fire_rate": 46,
      "range": 119,
      "accuracy": 61,
      "weight": 4.2,
      "value": 53
    },
    {
      "name": "assault_rifle",
      "damage": 30,
      "fire_rate": 40,
      "range": 119,
      "accuracy": 72,
      "weight": 13.1,
      "value": 144
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
  $('.item-list a').on('mouseenter', function(e) {
    var current_item = $(e.currentTarget).attr('class');
    console.log(current_item);
    for(item in weapons) {
      if (weapons[item].name == current_item) {
        console.log(weapons[item]);
        var container = $('.it-st');
        container.find('.damage').html(weapons[item].damage);
        container.find('.fire_rate').html(weapons[item].fire_rate);
        container.find('.range').html(weapons[item].range);
        container.find('.accuracy').html(weapons[item].accuracy);
        container.find('.weight').html(weapons[item].weight);
        container.find('.value').html(weapons[item].value);
      }
    }
  });
  var armors = [
    {
      "name": "chest",
      "dmg": 5,
      "wt": 3,
      "val": 6,
    },
    {
      "name": "left_arm",
      "dmg": 1,
      "wt": 2,
      "val": 8,
    },
    {
      "name": "left_leg",
      "dmg": 7,
      "wt": 8,
      "val": 4,
    },
    {
      "name": "right_arm",
      "dmg": 1,
      "wt": 2,
      "val": 8,
    },
    {
      "name": "right_leg",
      "dmg": 7,
      "wt": 8,
      "val": 4,
    },
    {
      "name": "mining",
      "dmg": 4,
      "wt": 3,
      "val": 5,
    },
    {
      "name": "vault",
      "dmg": 9,
      "wt": 7,
      "val": 8,
    }
  ]
  $('.item-list a').on('mouseenter', function(e) {
    var current_item = $(e.currentTarget).attr('class');
    console.log(current_item);
    for(item in armors) {
      if (armors[item].name == current_item) {
        console.log(armors[item]);
        var container = $('.it-st');
        container.find('.dmg').html(armors[item].dmg);
        container.find('.wt').html(armors[item].wt);
        container.find('.val').html(armors[item].val);
      }
    }
  });
  var aidd = [
    {
      "name": "blood",
      "medi": 80,
      "wgt": 0.5,
      "vlu": 76,
    },
    {
      "name": "bubble",
      "medi": 90,
      "wgt": 2.5,
      "vlu": 98,
    },
    {
      "name": "mole_rat",
      "medi": 30,
      "wgt": 0.6,
      "vlu": 30,
    },
    {
      "name": "mongrel",
      "medi": 60,
      "wgt": 1.1,
      "vlu": 50,
    },
    {
      "name": "psycho",
      "medi": 30,
      "wgt": 0.7,
      "vlu": 60,
    },
    {
      "name": "radx",
      "medi": 100,
      "wgt": 0.1,
      "vlu": 40,
    },
    {
      "name": "rada",
      "medi": 60,
      "wgt": 0.65,
      "vlu": 16,
    },
    {
      "name": "radr",
      "medi": 50,
      "wgt": 0.3,
      "vlu": 46,
    },
    {
      "name": "stimpak",
      "medi": 70,
      "wgt": 0.6,
      "vlu": 32,
    }
  ]
  $('.item-list a').on('mouseenter', function(e) {
    var current_item = $(e.currentTarget).attr('class');
    console.log(current_item);
    for(item in aidd) {
      if (aidd[item].name == current_item) {
        console.log(aidd[item]);
        var container = $('.it-st');
        container.find('.medi_nm').html(aidd[item].name);
        container.find('.medi').html(aidd[item].medi);
        container.find('.wgt').html(aidd[item].wgt);
        container.find('.vlu').html(aidd[item].vlu);
      }
    }
  });
});
