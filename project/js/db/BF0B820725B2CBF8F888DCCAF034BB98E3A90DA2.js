this.NesDb = this.NesDb || {};

NesDb[ 'BF0B820725B2CBF8F888DCCAF034BB98E3A90DA2' ] = {
	"$": {
		"name": "Shounen Ashibe: Nepal Daibouken no Maki",
		"altname": "少年アシベ ネパール大冒険の巻",
		"class": "Licensed",
		"catalog": "TFC-8A",
		"publisher": "Takara",
		"developer": "Takara",
		"region": "Japan",
		"players": "1",
		"date": "1991-11-15"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "31C7AD13",
				"sha1": "BF0B820725B2CBF8F888DCCAF034BB98E3A90DA2",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-06-24"
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
								"name": "TFC-8A-0 PRG",
								"size": "128k",
								"crc": "F225E3F5",
								"sha1": "0C1D5EAE6A4651947B2416D14B96A359B7E69BE3"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "TFC-8A-0 CHR",
								"size": "128k",
								"crc": "FCED4D2B",
								"sha1": "7A9E7104D8B9162E1618BF39796A95C5A90E19E4"
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
								"type": "MMC3C"
							}
						}
					]
				}
			]
		}
	]
};
