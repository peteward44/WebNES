this.NesDb = this.NesDb || {};

NesDb[ 'DD6F641FCB1473A15E194C8C816C8AA22042D6DC' ] = {
	"$": {
		"name": "Gluk The Thunder Warrior",
		"class": "Unlicensed",
		"catalog": "VJ-001",
		"publisher": "Gluk Video",
		"developer": "TXC Corp",
		"region": "Spain",
		"players": "1",
		"date": "1992"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL",
				"crc": "1570A0C8",
				"sha1": "DD6F641FCB1473A15E194C8C816C8AA22042D6DC",
				"dump": "ok",
				"dumper": "piteta",
				"datedumped": "2010-11-30"
			},
			"board": [
				{
					"$": {
						"type": "TXC-PT8154",
						"pcb": "PN\\01-22018-400",
						"mapper": "189"
					},
					"prg": [
						{
							"$": {
								"name": "04-01820-000",
								"size": "128k",
								"crc": "3F60AC50",
								"sha1": "DC326317557AA661F22C9457494C49EA1DEBF0B8"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "04-01820-010",
								"size": "128k",
								"crc": "9219BD34",
								"sha1": "79BC6D68A6FC658882C2076461EC270E20310AB5"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "74xx138"
							}
						},
						{
							"$": {
								"type": "74xx175"
							}
						},
						{
							"$": {
								"type": "PT8154"
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
