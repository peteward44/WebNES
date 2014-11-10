this.NesDb = this.NesDb || {};

NesDb[ 'E0E46C9071480F2BC9959E5A6F858561CB001168' ] = {
	"$": {
		"name": "Rollerball",
		"altname": "ローラーボール",
		"class": "Licensed",
		"catalog": "HAL-RH",
		"publisher": "HAL Laboratory",
		"developer": "HAL Laboratory",
		"region": "Japan",
		"players": "2",
		"date": "1988-12-20"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "E2A79A57",
				"sha1": "E0E46C9071480F2BC9959E5A6F858561CB001168",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2012-05-06"
			},
			"board": [
				{
					"$": {
						"type": "HVC-SFROM",
						"pcb": "HVC-SFROM-01",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "HAL-RH-0 PRG",
								"size": "128k",
								"crc": "BF3BB6D5",
								"sha1": "398D7047508113D0656BD484D0116941723470B5"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "HAL-RH-0 CHR",
								"size": "32k",
								"crc": "99D8D5E6",
								"sha1": "CC62EBC96C7395B61AAEB9818F973EB12A31584C"
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
	],
	"gameGenieCodes": [
		{
			"name": "All players start with only 1 ball",
			"codes": [
				[
					"PANGIPLA"
				]
			]
		},
		{
			"name": "Infinite balls for all players",
			"codes": [
				[
					"SZKGPXVS"
				]
			]
		}
	]
};
