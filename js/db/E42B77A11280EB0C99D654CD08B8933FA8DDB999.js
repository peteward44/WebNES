this.NesDb = this.NesDb || {};

NesDb[ 'E42B77A11280EB0C99D654CD08B8933FA8DDB999' ] = {
	"$": {
		"name": "Downtown Special: Kunio-kun no Jidaigeki Dayo Zenin Shuugou!",
		"altname": "ダウンタウンスペシャル くにおくんの時代劇だよ全員集合！",
		"class": "Licensed",
		"catalog": "TJC-J6",
		"publisher": "Technos",
		"developer": "Technos",
		"region": "Japan",
		"players": "2",
		"date": "1991-07-26"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "DC45A886",
				"sha1": "E42B77A11280EB0C99D654CD08B8933FA8DDB999",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-12-06"
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
								"name": "TJC-J6-0 PRG",
								"size": "128k",
								"crc": "F3FEB3AB",
								"sha1": "DE4AECAA5F8C6725D0491CBD59F1DD29AB718D76"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "TJC-J6-0 CHR",
								"size": "128k",
								"crc": "3F6ACEEF",
								"sha1": "0032C4A4ABBFD0A22C0095155DC9E262A9D9CA78"
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
