this.NesDb = this.NesDb || {};

NesDb[ '38A64BE0202DB4761BC65065C1D9D8F3FC784F5E' ] = {
	"$": {
		"name": "Ghostbusters",
		"altname": "ゴーストバスターズ",
		"class": "Licensed",
		"catalog": "GTS-GB",
		"publisher": "Tokuma Shoten",
		"developer": "Activision",
		"portdeveloper": "Bits Laboratory",
		"region": "Japan",
		"players": "1",
		"date": "1986-09-22"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "4057C51B",
				"sha1": "38A64BE0202DB4761BC65065C1D9D8F3FC784F5E",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-07-22"
			},
			"board": [
				{
					"$": {
						"type": "HVC-CNROM",
						"pcb": "HVC-CNROM-256K-01",
						"mapper": "3"
					},
					"prg": [
						{
							"$": {
								"name": "GTS-GB-0 PRG",
								"size": "32k",
								"crc": "6E4C0641",
								"sha1": "F6780B01D074500DDB33AF931ADEAF66116D1768"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "GTS-GB-0 CHR",
								"size": "32k",
								"crc": "DC6D8B34",
								"sha1": "69C7251903B88D583124C451C279BB287833EB5C"
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
