this.NesDb = this.NesDb || {};

NesDb[ '8E5767E4A6D5842684E1538D21948538643E0393' ] = {
	"$": {
		"name": "Action 52",
		"class": "Unlicensed",
		"subclass": "Multi-cart",
		"catalog": "ACT-52",
		"publisher": "Active Enterprises",
		"developer": "Active Enterprises",
		"region": "USA",
		"players": "1",
		"date": "1991"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "0C222495",
				"sha1": "8E5767E4A6D5842684E1538D21948538643E0393",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-11-05"
			},
			"board": [
				{
					"$": {
						"type": "MLT-ACTION52",
						"pcb": "023-N507",
						"mapper": "228"
					},
					"prg": [
						{
							"$": {
								"id": "0",
								"name": "ATI-02 ACTION 52",
								"size": "512k",
								"crc": "64E40C10",
								"sha1": "B5A53F844ACCB40C9584DC9105985EB5D8C6F604"
							}
						},
						{
							"$": {
								"id": "1",
								"name": "ATI-03 ACTION 52",
								"size": "512k",
								"crc": "69FDC534",
								"sha1": "0D505ECB691CE688E764AFFB684FBEF596A68D2B"
							}
						},
						{
							"$": {
								"id": "2",
								"name": "ATI-04 ACTION 52",
								"size": "512k",
								"crc": "7E43E9E1",
								"sha1": "EE262A09266956A9421AAA14A946BF69627FDF73"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "ATI-01 ACTION 52",
								"size": "512k",
								"crc": "596442EC",
								"sha1": "DC31DC0870E393FC46494B5E386AB08E769AC514"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "4520"
							}
						},
						{
							"$": {
								"type": "74xx273"
							}
						},
						{
							"$": {
								"type": "74xx273"
							}
						},
						{
							"$": {
								"type": "PAL16L8"
							}
						},
						{
							"$": {
								"type": "PAL16L8"
							}
						}
					],
					"cic": [
						{
							"$": {
								"type": "CIC Stun"
							}
						}
					]
				}
			]
		}
	]
};
