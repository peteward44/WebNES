this.NesDb = this.NesDb || {};

NesDb[ '29D8024529C5EC6F9F188D8F5448C84B5F32B9E7' ] = {
	"$": {
		"name": "Yoshi no Cookie",
		"altname": "ヨッシーのクッキー",
		"class": "Licensed",
		"catalog": "HVC-CI",
		"publisher": "Nintendo",
		"developer": "TOSE Software",
		"region": "Japan",
		"players": "2",
		"date": "1992-11-21"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "F66EC512",
				"sha1": "29D8024529C5EC6F9F188D8F5448C84B5F32B9E7",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-11-11"
			},
			"board": [
				{
					"$": {
						"type": "HVC-TFROM",
						"pcb": "HVC-TFROM-01",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "HVC-CI-0 PRG",
								"size": "128k",
								"crc": "C9FFC5FC",
								"sha1": "7E9BDECD2E83135AA5B59000A8F433BF3E825BFF"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "HVC-CI-0 CHR",
								"size": "64k",
								"crc": "B65161BC",
								"sha1": "6F72106DA66E2071D8FDB923C36B3336EDB9AD6C"
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
