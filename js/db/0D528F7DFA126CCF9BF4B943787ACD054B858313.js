this.NesDb = this.NesDb || {};

NesDb[ '0D528F7DFA126CCF9BF4B943787ACD054B858313' ] = {
	"$": {
		"name": "Zombie Hunter",
		"altname": "ゾンビハンター",
		"class": "Licensed",
		"catalog": "HSS-ZO",
		"publisher": "Hi-Score Software",
		"developer": "Lenar",
		"region": "Japan",
		"players": "1",
		"date": "1987-07-03"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "41632CB6",
				"sha1": "0D528F7DFA126CCF9BF4B943787ACD054B858313",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2008-04-16"
			},
			"board": [
				{
					"$": {
						"type": "HVC-SJROM",
						"pcb": "HVC-SJROM-01",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "HSS-ZO-0 PRG",
								"size": "128k",
								"crc": "C35E8D34",
								"sha1": "8C88BED1124141A4669546345165276D505D751A"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "HSS-ZO-0 CHR",
								"size": "32k",
								"crc": "45657447",
								"sha1": "28EE9FD361A90F142267EFEF346DC12C5FC99666"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC1"
							}
						}
					]
				}
			]
		}
	]
};
