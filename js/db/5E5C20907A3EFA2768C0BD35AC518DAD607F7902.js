this.NesDb = this.NesDb || {};

NesDb[ '5E5C20907A3EFA2768C0BD35AC518DAD607F7902' ] = {
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
				"revision": "1.0",
				"crc": "30BF2DBA",
				"sha1": "5E5C20907A3EFA2768C0BD35AC518DAD607F7902",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-11-28"
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
								"name": "PRG",
								"size": "128k",
								"crc": "DB53A88D",
								"sha1": "2ED5A5A466B373E58DEB04FCF0D12BAB7E410415"
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
