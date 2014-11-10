this.NesDb = this.NesDb || {};

NesDb[ 'CCDAA5DC16C314BC9BACC9D4AAF7C91818C1EF05' ] = {
	"$": {
		"name": "Moero!! Pro Yakyuu",
		"altname": "燃えろ！！プロ野球",
		"class": "Licensed",
		"subclass": "3rd-Party",
		"catalog": "JF-13",
		"publisher": "Jaleco",
		"developer": "TOSE Software",
		"region": "Japan",
		"players": "2",
		"date": "1987-06-26"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"revision": "1.1",
				"crc": "90F3F161",
				"sha1": "CCDAA5DC16C314BC9BACC9D4AAF7C91818C1EF05",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-01-18"
			},
			"board": [
				{
					"$": {
						"type": "JALECO-JF-13",
						"pcb": "JF-13",
						"mapper": "86"
					},
					"prg": [
						{
							"$": {
								"name": "JF13 PRG",
								"size": "128k",
								"crc": "E30B210E",
								"sha1": "EDFDAFEF6EFDAEDF19248ED7C95FB635154CADE2"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "CHR",
								"size": "64k",
								"crc": "26A94526",
								"sha1": "C06EF1F446C4E66CE5EFC4E8B282E5F7B9EB3BAA"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "74xx139"
							}
						},
						{
							"$": {
								"type": "74xx174"
							}
						},
						{
							"$": {
								"type": "74xx174"
							}
						},
						{
							"$": {
								"type": "D7756C"
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
