this.NesDb = this.NesDb || {};

NesDb[ 'C8F85816A7D219B1AB9DE75B6A57EEC68DCA37E6' ] = {
	"$": {
		"name": "Super Sprint",
		"altname": "スーパースプリント",
		"class": "Licensed",
		"catalog": "ALT-7C",
		"publisher": "Altron",
		"developer": "Tengen",
		"region": "Japan",
		"players": "2",
		"date": "1991-08-03"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "9CBB0291",
				"sha1": "C8F85816A7D219B1AB9DE75B6A57EEC68DCA37E6",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2010-07-22"
			},
			"board": [
				{
					"$": {
						"type": "HVC-TBROM",
						"pcb": "HVC-TBROM-01",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "ALT-7C-0 PRG",
								"size": "64k",
								"crc": "0F0D64B7",
								"sha1": "A2CC199A80CA39E6641CDCF83EF215AE608C93A3"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "ALT-7C-0 CHR",
								"size": "64k",
								"crc": "15C74DDC",
								"sha1": "AE0E3A9F80D56C81CEAB932A79EF150DC6A852AB"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC3B"
							}
						}
					]
				}
			]
		}
	],
	"gameGenieCodes": [
		{
			"name": "Infinite continues",
			"codes": [
				[
					"SZETVUVK"
				]
			]
		},
		{
			"name": "6 continues",
			"codes": [
				[
					"YASSPALA"
				]
			]
		},
		{
			"name": "No continues",
			"codes": [
				[
					"PASSPALA"
				]
			]
		},
		{
			"name": "More obstacles on tracks",
			"codes": [
				[
					"IEKKNTAA",
					"GXSGUVSE"
				]
			]
		},
		{
			"name": "Even more obstacles on tracks",
			"codes": [
				[
					"ZEKKNTAE",
					"GXSGUVSE"
				]
			]
		},
		{
			"name": "Lots and lots of obstacles on tracks",
			"codes": [
				[
					"YEKKNTAE",
					"GXSGUVSE"
				]
			]
		}
	]
};
