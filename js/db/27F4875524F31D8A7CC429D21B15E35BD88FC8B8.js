this.NesDb = this.NesDb || {};

NesDb[ '27F4875524F31D8A7CC429D21B15E35BD88FC8B8' ] = {
	"$": {
		"name": "Sanada Juu Yuushi",
		"altname": "真田十勇士",
		"class": "Licensed",
		"catalog": "KSC-JY",
		"publisher": "Kemco",
		"developer": "Kemco",
		"region": "Japan",
		"players": "1",
		"date": "1988-06-27"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "0902C8F0",
				"sha1": "27F4875524F31D8A7CC429D21B15E35BD88FC8B8",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2010-07-22"
			},
			"board": [
				{
					"$": {
						"type": "HVC-SKROM",
						"pcb": "HVC-SKROM-01",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "KSC-JY-0 PRG",
								"size": "128k",
								"crc": "3403B1FC",
								"sha1": "702FB8948CAFA826CD087B8C41DEFCC5D27F8940"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "KSC-JY-0 CHR",
								"size": "128k",
								"crc": "F0E412CF",
								"sha1": "0BA53BD1ECB402B05C2A3EE548B5FBB5D0EDBA0A"
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
								"type": "MMC1A"
							}
						}
					]
				}
			]
		}
	]
};
