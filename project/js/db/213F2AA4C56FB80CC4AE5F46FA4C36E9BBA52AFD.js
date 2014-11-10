this.NesDb = this.NesDb || {};

NesDb[ '213F2AA4C56FB80CC4AE5F46FA4C36E9BBA52AFD' ] = {
	"$": {
		"name": "Otaku no Seiza: An Adventure in the Otaku Galaxy",
		"altname": "おたくの星座",
		"class": "Licensed",
		"catalog": "MAM-OQ",
		"publisher": "M&M",
		"developer": "Advance Communication",
		"region": "Japan",
		"players": "1",
		"date": "1991-07-31"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "4582F22E",
				"sha1": "213F2AA4C56FB80CC4AE5F46FA4C36E9BBA52AFD",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-06-22"
			},
			"board": [
				{
					"$": {
						"type": "HVC-TKROM",
						"pcb": "HVC-TKROM-03",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "MAM-OQ-0 PRG",
								"size": "256k",
								"crc": "A524AE9B",
								"sha1": "CFD5F611C609EE03B840B2C47F35205E4E31B98E"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "MAM-OQ-0 CHR",
								"size": "128k",
								"crc": "5445086E",
								"sha1": "3F8B7CEFDDAAA732906406C53BBA23B362BAB1F5"
							}
						}
					],
					"wram": [
						{
							"$": {
								"size": "8k",
								"battery": "1"
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
	]
};
