this.NesDb = this.NesDb || {};

NesDb[ '38A8CA06E6A97FA6E5AB2DB25B7DCB3C2433971D' ] = {
	"$": {
		"name": "Venice Beach Volleyball",
		"class": "Unlicensed",
		"catalog": "AVE-VB",
		"publisher": "AVE",
		"developer": "Idea-Tek",
		"region": "USA",
		"players": "2",
		"date": "1991"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "882E1901",
				"sha1": "38A8CA06E6A97FA6E5AB2DB25B7DCB3C2433971D",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-07-04"
			},
			"board": [
				{
					"$": {
						"type": "AVE-MB-91",
						"pcb": "MB-91«A»",
						"mapper": "79"
					},
					"prg": [
						{
							"$": {
								"name": "2388-PGM",
								"size": "32k",
								"crc": "552F1143",
								"sha1": "F16CAF18B4C888CB4D1E495AC5481417F95466E6"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "949B-CHR",
								"size": "32k",
								"crc": "70254E19",
								"sha1": "D552C39437B8342DB7CC48C2E3CBC4E0C3E65DDC"
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
								"h": "1",
								"v": "0"
							}
						}
					]
				}
			]
		}
	]
};
