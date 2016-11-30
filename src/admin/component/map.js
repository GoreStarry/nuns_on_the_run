var y10 = 4.2,
    y11 = 7.5,
    y32 = 11.2,
    y33 = 15.7,
    y55 = 18.5,
    y46 = 20,
    y57 = 21.8,
    y56 = 23,
    y82 = 24,
    y80 = 25.5,
    y83 = 27,
    y75 = 28.5,
    y87 = 30,
    y84 = 31.2,
    y109 = 35,
    y111 = 38,
    y110 = 39,
    y128 = 42.3,
    y131 = 41.8,
    y132 = 43.5,
    y136 = 44.2,
    y138 = 45,
    y134 = 46.8,
    y149 = 48.2,
    y151 = 50,
    x33 = 3.8,
    x10 = 5.2,
    x9 = 9,
    x8 = 12.8,
    x7 = 16.4,
    x15 = 19.4,
    x6 = 22.7,
    x5 = 27.2,
    xx = 26,
    x5 = xx + 1.2,
    x4 = xx + 6,
    x3 = xx + 10.7,
    x2 = xx + 15.7,
    x1 = xx + 19.5,
    x24 = xx + 18.5,
    x22 = xx + 21.5,
    x29 = 22.2,
    x28 = 27.7,
    x53 = 13.7,
    x52 = 16.6,
    x37 = 25.2,
    x48 = xx + 2.7,
    x61 = 23,
    x66 = xx + 9,
    x47 = xx + 12.3,
    x67 = xx + 13.5,
    x81 = 11.2,
    x107 = 12.2,
    x132 = 6,
    x133 = 9,
    x152 = 17.8,
    x103 = 27.2,
    x91 = 29.8,
    x92 = xx + 7.8,
    x93 = xx + 12,
    x119 = xx + 11.5,
    x140 = xx + 14.7,
    x141 = xx + 18,
    x144 = xx + 16.2;

var map_data = {
    1: {
        position: {
            x: x1,
            y: y10
        },
        connection: [21, 0, 0, 0]
    },
    2: {
        position: {
            x: x2,
            y: y10
        },
        connection: [20, 0, 0, 0]
    },
    3: {
        position: {
            x: x3,
            y: y10
        },
        connection: [19, 0, 0, 0]
    },
    4: {
        position: {
            x: x4,
            y: y10
        },
        connection: [18, 0, 0, 0]
    },
    5: {
        position: {
            x: x5,
            y: y10
        },
        connection: [17, 0, 0, 0]
    },
    6: {
        position: {
            x: x6,
            y: y10
        },
        connection: [16, 0, 0, 0]
    },
    7: {
        position: {
            x: x7,
            y: y10
        },
        connection: [14, 0, 0, 0]
    },
    8: {
        position: {
            x: x8,
            y: y10
        },
        connection: [0, 7, 0, 9]
    },
    9: {
        position: {
            x: x9,
            y: y10
        },
        connection: [12, 8, 0, 10]
    },
    10: {
        position: {
            x: x10,
            y: y10
        },
        connection: [11, 9, 0, 0]
    },
    11: {
        position: {
            x: x10,
            y: y11
        },
        connection: [0, 0, 0, 0]
    },
    1: {
        position: {
            x: x10,
            y: y11
        },
        connection: [0, 0, 0, 0]
    },
    12: {
        position: {
            x: x9,
            y: y11
        },
        connection: [0, 0, 0, 0]
    },
    13: {
        position: {
            x: x8,
            y: y11
        },
        connection: [0, 0, 0, 0]
    },
    14: {
        position: {
            x: x7,
            y: y11
        },
        connection: [0, 0, 0, 0]
    },
    15: {
        position: {
            x: x15,
            y: y11
        },
        connection: [0, 0, 0, 0]
    },
    16: {
        position: {
            x: x6,
            y: y11
        },
        connection: [0, 0, 0, 0]
    },
    17: {
        position: {
            x: x5,
            y: y11
        },
        connection: [0, 0, 0, 0]
    },
    18: {
        position: {
            x: x4,
            y: y11
        },
        connection: [0, 0, 0, 0]
    },
    19: {
        position: {
            x: x3,
            y: y11
        },
        connection: [0, 0, 0, 0]
    },
    20: {
        position: {
            x: x2,
            y: y11
        },
        connection: [0, 0, 0, 0]
    },
    21: {
        position: {
            x: x1,
            y: y11
        },
        connection: [0, 0, 0, 0]
    },
    22: {
        position: {
            x: x22,
            y: y11
        },
        connection: [0, 0, 0, 0]
    },
    23: {
        position: {
            x: x22,
            y: y32
        },
        connection: [0, 0, 0, 0]
    },
    24: {
        position: {
            x: x24,
            y: y32
        },
        connection: [0, 0, 0, 0]
    },
    25: {
        position: {
            x: x2,
            y: y32
        },
        connection: [0, 0, 0, 0]
    },
    26: {
        position: {
            x: x3,
            y: y32
        },
        connection: [0, 0, 0, 0]
    },
    27: {
        position: {
            x: x4,
            y: y32
        },
        connection: [0, 0, 0, 0]
    },
    28: {
        position: {
            x: x28,
            y: y32
        },
        connection: [0, 0, 0, 0]
    },
    29: {
        position: {
            x: x29,
            y: y32
        },
        connection: [0, 0, 0, 0]
    },
    30: {
        position: {
            x: x15,
            y: y32
        },
        connection: [0, 0, 0, 0]
    },
    31: {
        position: {
            x: x9,
            y: y32
        },
        connection: [0, 0, 0, 0]
    },
    32: {
        position: {
            x: x10,
            y: y32
        },
        connection: [0, 0, 0, 0]
    },
    33: {
        position: {
            x: x33,
            y: y33
        },
        connection: [0, 0, 0, 0]
    },
    34: {
        position: {
            x: x9,
            y: y33
        },
        connection: [0, 0, 0, 0]
    },
    35: {
        position: {
            x: x15,
            y: y33
        },
        connection: [0, 0, 0, 0]
    },
    36: {
        position: {
            x: x29,
            y: y33
        },
        connection: [0, 0, 0, 0]
    },
    37: {
        position: {
            x: x37,
            y: y33
        },
        connection: [0, 0, 0, 0]
    },
    38: {
        position: {
            x: x28,
            y: y33
        },
        connection: [0, 0, 0, 0]
    },
    39: {
        position: {
            x: x4,
            y: y33
        },
        connection: [0, 0, 0, 0]
    },
    40: {
        position: {
            x: x3,
            y: y33
        },
        connection: [0, 0, 0, 0]
    },
    41: {
        position: {
            x: x2,
            y: y33
        },
        connection: [0, 0, 0, 0]
    },
    42: {
        position: {
            x: x24,
            y: y33
        },
        connection: [0, 0, 0, 0]
    },
    43: {
        position: {
            x: x22,
            y: y33
        },
        connection: [0, 0, 0, 0]
    },
    44: {
        position: {
            x: x22,
            y: y46
        },
        connection: [0, 0, 0, 0]
    },
    45: {
        position: {
            x: x24,
            y: y46
        },
        connection: [0, 0, 0, 0]
    },
    46: {
        position: {
            x: x2,
            y: y46
        },
        connection: [0, 0, 0, 0]
    },
    47: {
        position: {
            x: x47,
            y: y46
        },
        connection: [0, 0, 0, 0]
    },
    48: {
        position: {
            x: x48,
            y: y46
        },
        connection: [0, 0, 0, 0]
    },
    49: {
        position: {
            x: x37,
            y: y46
        },
        connection: [0, 0, 0, 0]
    },
    50: {
        position: {
            x: x6,
            y: y46
        },
        connection: [0, 0, 0, 0]
    },
    51: {
        position: {
            x: x15,
            y: y46
        },
        connection: [0, 0, 0, 0]
    },
    52: {
        position: {
            x: x7,
            y: y46
        },
        connection: [0, 0, 0, 0]
    },
    53: {
        position: {
            x: x53,
            y: y46
        },
        connection: [0, 0, 0, 0]
    },
    54: {
        position: {
            x: x9,
            y: y46
        },
        connection: [0, 0, 0, 0]
    },
    55: {
        position: {
            x: x33,
            y: y46
        },
        connection: [0, 0, 0, 0]
    },
    56: {
        position: {
            x: x33,
            y: y56
        },
        connection: [0, 0, 0, 0]
    },
    57: {
        position: {
            x: x9,
            y: y57
        },
        connection: [0, 0, 0, 0]
    },
    58: {
        position: {
            x: x53,
            y: y57
        },
        connection: [0, 0, 0, 0]
    },
    59: {
        position: {
            x: x52,
            y: y57
        },
        connection: [0, 0, 0, 0]
    },
    60: {
        position: {
            x: x15,
            y: y57
        },
        connection: [0, 0, 0, 0]
    },
    61: {
        position: {
            x: x61,
            y: y57
        },
        connection: [0, 0, 0, 0]
    },
    62: {
        position: {
            x: x37,
            y: y57
        },
        connection: [0, 0, 0, 0]
    },
    63: {
        position: {
            x: x4,
            y: y57
        },
        connection: [0, 0, 0, 0]
    },
    64: {
        position: {
            x: x4,
            y: y80
        },
        connection: [0, 0, 0, 0]
    },
    65: {
        position: {
            x: x66,
            y: y80
        },
        connection: [0, 0, 0, 0]
    },
    66: {
        position: {
            x: x66,
            y: y57
        },
        connection: [0, 0, 0, 0]
    },
    67: {
        position: {
            x: x67,
            y: y56
        },
        connection: [0, 0, 0, 0]
    },
    68: {
        position: {
            x: x2,
            y: y56
        },
        connection: [0, 0, 0, 0]
    },
    69: {
        position: {
            x: x24,
            y: y56
        },
        connection: [0, 0, 0, 0]
    },
    70: {
        position: {
            x: x22,
            y: y56
        },
        connection: [0, 0, 0, 0]
    },
    71: {
        position: {
            x: x22,
            y: y83
        },
        connection: [0, 0, 0, 0]
    },
    72: {
        position: {
            x: x24,
            y: y83
        },
        connection: [0, 0, 0, 0]
    },
    73: {
        position: {
            x: x2,
            y: y83
        },
        connection: [0, 0, 0, 0]
    },
    74: {
        position: {
            x: x47,
            y: y75
        },
        connection: [0, 0, 0, 0]
    },
    75: {
        position: {
            x: x48,
            y: y75
        },
        connection: [0, 0, 0, 0]
    },
    76: {
        position: {
            x: x37,
            y: y80
        },
        connection: [0, 0, 0, 0]
    },
    77: {
        position: {
            x: x61,
            y: y80
        },
        connection: [0, 0, 0, 0]
    },
    78: {
        position: {
            x: x15,
            y: y80
        },
        connection: [0, 0, 0, 0]
    },
    79: {
        position: {
            x: x7,
            y: y80
        },
        connection: [0, 0, 0, 0]
    },
    80: {
        position: {
            x: x53,
            y: y80
        },
        connection: [0, 0, 0, 0]
    },
    81: {
        position: {
            x: x81,
            y: y80
        },
        connection: [0, 0, 0, 0]
    },
    82: {
        position: {
            x: x9,
            y: y82
        },
        connection: [0, 0, 0, 0]
    },
    83: {
        position: {
            x: x33,
            y: y83
        },
        connection: [0, 0, 0, 0]
    },
    84: {
        position: {
            x: x33,
            y: y84
        },
        connection: [0, 0, 0, 0]
    },
    85: {
        position: {
            x: x9,
            y: y84
        },
        connection: [0, 0, 0, 0]
    },
    86: {
        position: {
            x: x53,
            y: y84
        },
        connection: [0, 0, 0, 0]
    },
    87: {
        position: {
            x: x7,
            y: y87
        },
        connection: [0, 0, 0, 0]
    },
    88: {
        position: {
            x: x15,
            y: y87
        },
        connection: [0, 0, 0, 0]
    },
    89: {
        position: {
            x: x61,
            y: y87
        },
        connection: [0, 0, 0, 0]
    },
    90: {
        position: {
            x: x37,
            y: y84
        },
        connection: [0, 0, 0, 0]
    },
    91: {
        position: {
            x: x91,
            y: y84
        },
        connection: [0, 0, 0, 0]
    },
    92: {
        position: {
            x: x92,
            y: y84
        },
        connection: [0, 0, 0, 0]
    },
    93: {
        position: {
            x: x93,
            y: y84
        },
        connection: [0, 0, 0, 0]
    },
    94: {
        position: {
            x: x2,
            y: y84
        },
        connection: [0, 0, 0, 0]
    },
    95: {
        position: {
            x: x24,
            y: y84
        },
        connection: [0, 0, 0, 0]
    },
    96: {
        position: {
            x: x22,
            y: y84
        },
        connection: [0, 0, 0, 0]
    },
    97: {
        position: {
            x: x22,
            y: y109
        },
        connection: [0, 0, 0, 0]
    },
    98: {
        position: {
            x: x24,
            y: y109
        },
        connection: [0, 0, 0, 0]
    },
    99: {
        position: {
            x: x2,
            y: y109
        },
        connection: [0, 0, 0, 0]
    },
    100: {
        position: {
            x: x47,
            y: y109
        },
        connection: [0, 0, 0, 0]
    },
    101: {
        position: {
            x: x92,
            y: y109
        },
        connection: [0, 0, 0, 0]
    },
    102: {
        position: {
            x: x91,
            y: y109
        },
        connection: [0, 0, 0, 0]
    },
    103: {
        position: {
            x: x103,
            y: y109
        },
        connection: [0, 0, 0, 0]
    },
    104: {
        position: {
            x: x61,
            y: y109
        },
        connection: [0, 0, 0, 0]
    },
    105: {
        position: {
            x: x15,
            y: y109
        },
        connection: [0, 0, 0, 0]
    },
    105: {
        position: {
            x: x15,
            y: y109
        },
        connection: [0, 0, 0, 0]
    },
    106: {
        position: {
            x: x7,
            y: y109
        },
        connection: [0, 0, 0, 0]
    },
    107: {
        position: {
            x: x107,
            y: y109
        },
        connection: [0, 0, 0, 0]
    },
    108: {
        position: {
            x: x9,
            y: y109
        },
        connection: [0, 0, 0, 0]
    },
    109: {
        position: {
            x: x33,
            y: y109
        },
        connection: [0, 0, 0, 0]
    },
    110: {
        position: {
            x: x33,
            y: y110
        },
        connection: [0, 0, 0, 0]
    },
    111: {
        position: {
            x: x9,
            y: y111
        },
        connection: [0, 0, 0, 0]
    },
    112: {
        position: {
            x: x107,
            y: y111
        },
        connection: [0, 0, 0, 0]
    },
    113: {
        position: {
            x: x7,
            y: y111
        },
        connection: [0, 0, 0, 0]
    },
    114: {
        position: {
            x: x15,
            y: y111
        },
        connection: [0, 0, 0, 0]
    },
    115: {
        position: {
            x: x61,
            y: y111
        },
        connection: [0, 0, 0, 0]
    },
    116: {
        position: {
            x: x103,
            y: y111
        },
        connection: [0, 0, 0, 0]
    },
    117: {
        position: {
            x: x91,
            y: y111
        },
        connection: [0, 0, 0, 0]
    },
    118: {
        position: {
            x: x92,
            y: y110
        },
        connection: [0, 0, 0, 0]
    },
    119: {
        position: {
            x: x119,
            y: y110
        },
        connection: [0, 0, 0, 0]
    },
    120: {
        position: {
            x: x2,
            y: y110
        },
        connection: [0, 0, 0, 0]
    },
    121: {
        position: {
            x: x24,
            y: y110
        },
        connection: [0, 0, 0, 0]
    },
    122: {
        position: {
            x: x22,
            y: y110
        },
        connection: [0, 0, 0, 0]
    },
    123: {
        position: {
            x: x22,
            y: y128
        },
        connection: [0, 0, 0, 0]
    },
    124: {
        position: {
            x: x24,
            y: y128
        },
        connection: [0, 0, 0, 0]
    },
    125: {
        position: {
            x: x2,
            y: y128
        },
        connection: [0, 0, 0, 0]
    },
    126: {
        position: {
            x: x119,
            y: y128
        },
        connection: [0, 0, 0, 0]
    },
    127: {
        position: {
            x: x92,
            y: y128
        },
        connection: [0, 0, 0, 0]
    },
    128: {
        position: {
            x: x91,
            y: y128
        },
        connection: [0, 0, 0, 0]
    },
    129: {
        position: {
            x: x61,
            y: y131
        },
        connection: [0, 0, 0, 0]
    },
    130: {
        position: {
            x: x15,
            y: y131
        },
        connection: [0, 0, 0, 0]
    },
    131: {
        position: {
            x: x7,
            y: y131
        },
        connection: [0, 0, 0, 0]
    },
    132: {
        position: {
            x: x132,
            y: y132
        },
        connection: [0, 0, 0, 0]
    },
    133: {
        position: {
            x: x9,
            y: y149
        },
        connection: [0, 0, 0, 0]
    },
    134: {
        position: {
            x: x7,
            y: y134
        },
        connection: [0, 0, 0, 0]
    },
    135: {
        position: {
            x: x61,
            y: y134
        },
        connection: [0, 0, 0, 0]
    },
    136: {
        position: {
            x: x103,
            y: y136
        },
        connection: [0, 0, 0, 0]
    },
    137: {
        position: {
            x: x91,
            y: y136
        },
        connection: [0, 0, 0, 0]
    },
    138: {
        position: {
            x: x92,
            y: y138
        },
        connection: [0, 0, 0, 0]
    },
    139: {
        position: {
            x: x119,
            y: y138
        },
        connection: [0, 0, 0, 0]
    },
    140: {
        position: {
            x: x140,
            y: y138
        },
        connection: [0, 0, 0, 0]
    },
    141: {
        position: {
            x: x141,
            y: y138
        },
        connection: [0, 0, 0, 0]
    },
    142: {
        position: {
            x: x22,
            y: y138
        },
        connection: [0, 0, 0, 0]
    },
    143: {
        position: {
            x: x22,
            y: y151
        },
        connection: [0, 0, 0, 0]
    },
    144: {
        position: {
            x: x144,
            y: y151
        },
        connection: [0, 0, 0, 0]
    },
    145: {
        position: {
            x: x119,
            y: y151
        },
        connection: [0, 0, 0, 0]
    },
    146: {
        position: {
            x: x119,
            y: y149
        },
        connection: [0, 0, 0, 0]
    },
    147: {
        position: {
            x: x92,
            y: y149
        },
        connection: [0, 0, 0, 0]
    },
    148: {
        position: {
            x: x91,
            y: y149
        },
        connection: [0, 0, 0, 0]
    },
    149: {
        position: {
            x: x37,
            y: y149
        },
        connection: [0, 0, 0, 0]
    },
    150: {
        position: {
            x: x15,
            y: y134
        },
        connection: [0, 0, 0, 0]
    },
    151: {
        position: {
            x: x53,
            y: y151
        },
        connection: [0, 0, 0, 0]
    },
    152: {
        position: {
            x: x152,
            y: y151
        },
        connection: [0, 0, 0, 0]
    },
    153: {
        position: {
            x: x29,
            y: y151
        },
        connection: [0, 0, 0, 0]
    },
    154: {
        position: {
            x: x103,
            y: y151
        },
        connection: [0, 0, 0, 0]
    },
    155: {
        position: {
            x: x91,
            y: y151
        },
        connection: [0, 0, 0, 0]
    }
}

module.exports = map_data;