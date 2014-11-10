this.NesDb = this.NesDb || {};

NesDb[ '6AFC82DBDB84B09286D09192BFFD641D9B3D003F' ] = {
	"$": {
		"name": "Puzzle",
		"class": "Unlicensed",
		"catalog": "AVE-PZ",
		"publisher": "AVE",
		"developer": "Idea-Tek",
		"region": "USA",
		"players": "1",
		"date": "1990"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "EA19080A",
				"sha1": "6AFC82DBDB84B09286D09192BFFD641D9B3D003F",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-07-04"
			},
			"board": [
				{
					"$": {
						"type": "AVE-NINA-03",
						"pcb": "NINA-03 REV. A",
						"mapper": "79"
					},
					"prg": [
						{
							"$": {
								"size": "32k",
								"crc": "0C871B42",
								"sha1": "7CE6D42024313ED82A9649B468F642F3101538EB"
							}
						}
					],
					"chr": [
						{
							"$": {
								"size": "32k",
								"crc": "65825E30",
								"sha1": "1D4567D9086313EA5EDB2E696E047725DA169BD2"
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
						}
					],
					"cic": [
						{
							"$": {
								"type": "MX8018"
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
	]
};
