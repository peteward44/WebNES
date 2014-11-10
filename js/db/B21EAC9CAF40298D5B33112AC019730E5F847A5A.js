this.NesDb = this.NesDb || {};

NesDb[ 'B21EAC9CAF40298D5B33112AC019730E5F847A5A' ] = {
	"$": {
		"name": "Little Magic",
		"altname": "リトルマジック",
		"class": "Licensed",
		"catalog": "DFC-LG",
		"publisher": "Data East",
		"developer": "",
		"region": "Japan",
		"players": "1",
		"date": "1990-09-14"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "C9EDF585",
				"sha1": "B21EAC9CAF40298D5B33112AC019730E5F847A5A",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2012-05-06"
			},
			"board": [
				{
					"$": {
						"type": "HVC-TKROM",
						"pcb": "HVC-TKROM-02",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "DFC-LG-0 PRG",
								"size": "128k",
								"crc": "9894F766",
								"sha1": "9B09EEA2A64E3DAD3D441C026E929645A090B372"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "DFC-LG-0 CHR",
								"size": "128k",
								"crc": "8191173A",
								"sha1": "5139FC54D72DC5AAC6CED2B543FB022A1B091ECC"
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
