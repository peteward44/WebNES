this.NesDb = this.NesDb || {};

NesDb[ 'F411C7903452C9470C8BF73FED334C485F14A8E4' ] = {
	"$": {
		"name": "Ghostbusters",
		"class": "Licensed",
		"catalog": "NES-GB-USA",
		"publisher": "Activision",
		"developer": "Activision",
		"portdeveloper": "Bits Laboratory",
		"region": "USA",
		"players": "1",
		"date": "1988-10"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "6A154B68",
				"sha1": "F411C7903452C9470C8BF73FED334C485F14A8E4",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-01-24"
			},
			"board": [
				{
					"$": {
						"type": "NES-CNROM",
						"pcb": "NES-CN-ROM-256-05",
						"mapper": "3"
					},
					"prg": [
						{
							"$": {
								"name": "NES-GB-0 PRG",
								"size": "32k",
								"crc": "19555D39",
								"sha1": "00F4D7B1CAE80868AD79DE56B4E944648BDD8F21"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-GB-0 CHR",
								"size": "32k",
								"crc": "9B95F0FC",
								"sha1": "3D34D25A8D1179F6B3731B2D3058064911C5BD63"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "74xx161"
							}
						}
					],
					"cic": [
						{
							"$": {
								"type": "6113A"
							}
						}
					],
					"pad": [
						{
							"$": {
								"h": "0",
								"v": "1"
							}
						}
					]
				}
			]
		}
	],
	"gameGenieCodes": [
		{
			"name": "Start with $1,000,000",
			"codes": [
				[
					"AVVETNTI"
				]
			]
		},
		{
			"name": "Infinite fuel",
			"codes": [
				[
					"SXKZAZVG"
				]
			]
		},
		{
			"name": "Immune to ghosts on Zuul stairway",
			"codes": [
				[
					"OXOXKPVK"
				]
			]
		},
		{
			"name": "Permanent ghost alarm",
			"codes": [
				[
					"PAEEXKPX"
				]
			]
		},
		{
			"name": "Permanent ghost vacuum",
			"codes": [
				[
					"PASPLOPX"
				]
			]
		},
		{
			"name": "Self-emptying traps",
			"codes": [
				[
					"OXSESGSX"
				]
			]
		},
		{
			"name": "Super sprinting up Zuul stairway",
			"codes": [
				[
					"AEEZOAPA"
				]
			]
		}
	]
};
