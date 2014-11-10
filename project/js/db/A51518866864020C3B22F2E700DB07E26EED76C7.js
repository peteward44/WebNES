this.NesDb = this.NesDb || {};

NesDb[ 'A51518866864020C3B22F2E700DB07E26EED76C7' ] = {
	"$": {
		"name": "Metal Storm",
		"class": "Licensed",
		"catalog": "NES-4M-USA",
		"publisher": "Irem",
		"developer": "Tamtex",
		"region": "USA",
		"players": "1",
		"date": "1991-02"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "BCACBBF4",
				"sha1": "A51518866864020C3B22F2E700DB07E26EED76C7",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2005-10-16"
			},
			"board": [
				{
					"$": {
						"type": "NES-TLROM",
						"pcb": "NES-TLROM-03",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "NES-4M-0 PRG",
								"size": "128k",
								"crc": "5D05CCD0",
								"sha1": "9E7024BDCAD2C2E4BB4B6CC10BAE002E538DC8CF"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-4M-0 CHR",
								"size": "256k",
								"crc": "1E7F6E87",
								"sha1": "343DF992219F61C691A89C579173AD91674DEBA0"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC3B"
							}
						}
					],
					"cic": [
						{
							"$": {
								"type": "6113B1"
							}
						}
					]
				}
			]
		}
	],
	"gameGenieCodes": [
		{
			"name": "Start with 6 lives",
			"codes": [
				[
					"TEXUNLZA"
				]
			]
		},
		{
			"name": "Start with 9 lives",
			"codes": [
				[
					"PEXUNLZE"
				]
			]
		},
		{
			"name": "Infinite lives",
			"codes": [
				[
					"AASOYYPA"
				]
			]
		},
		{
			"name": "Start with extra weapons",
			"codes": [
				[
					"NNNLOLAE"
				]
			]
		},
		{
			"name": "Slower timer",
			"codes": [
				[
					"AVKYPSGL"
				]
			]
		},
		{
			"name": "Faster timer",
			"codes": [
				[
					"AXKYPSGL"
				]
			]
		},
		{
			"name": "Permanent fireball",
			"codes": [
				[
					"AESTKXGA"
				]
			]
		},
		{
			"name": "Permanent shield",
			"codes": [
				[
					"AESXXNGY"
				]
			]
		}
	]
};
