this.NesDb = this.NesDb || {};

NesDb[ '2BBADFBF3BA95DE8B4415FDE9CCE07AA0053092F' ] = {
	"$": {
		"name": "Slalom",
		"class": "Licensed",
		"catalog": "NES-SL-EEC",
		"publisher": "Nintendo",
		"developer": "Rare",
		"region": "Europe",
		"players": "2",
		"date": "1987-10-15"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "C30848D3",
				"sha1": "2BBADFBF3BA95DE8B4415FDE9CCE07AA0053092F",
				"dump": "ok",
				"dumper": "piteta",
				"datedumped": "2007-11-03"
			},
			"board": [
				{
					"$": {
						"type": "NES-NROM-256",
						"pcb": "NES-NROM-256-03",
						"mapper": "0"
					},
					"prg": [
						{
							"$": {
								"name": "PAL-SL-0 PRG",
								"size": "32k",
								"crc": "8A65BAFF",
								"sha1": "D97DFD798E1CC18B5E060738D71A768C13EF953E"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-SL-0 CHR",
								"size": "8k",
								"crc": "2F836491",
								"sha1": "D6D690A428ADF0360FE3C0301A0080DBCB9B90EB"
							}
						}
					],
					"cic": [
						{
							"$": {
								"type": "3195A"
							}
						}
					],
					"pad": [
						{
							"$": {
								"h": "1",
								"v": "0"
							}
						}
					]
				}
			]
		}
	],
	"gameGenieCodes": [
		{
			"name": "Ski super fast!",
			"codes": [
				[
					"PAOULZAA"
				]
			]
		},
		{
			"name": "No track obstacles",
			"codes": [
				[
					"AAEPLIPA"
				]
			]
		},
		{
			"name": "Timer at 5 minutes for all tracks",
			"codes": [
				[
					"XZXPATVZ",
					"PAXPPVPN"
				]
			]
		}
	]
};
