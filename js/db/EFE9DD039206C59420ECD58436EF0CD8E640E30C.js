this.NesDb = this.NesDb || {};

NesDb[ 'EFE9DD039206C59420ECD58436EF0CD8E640E30C' ] = {
	"$": {
		"name": "Pachi Com",
		"altname": "パチコン",
		"class": "Licensed",
		"catalog": "TFS-PC",
		"publisher": "Toemiland",
		"developer": "Shouei System",
		"region": "Japan",
		"players": "1",
		"date": "1985-11-21"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "E30B2BCF",
				"sha1": "EFE9DD039206C59420ECD58436EF0CD8E640E30C",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-04-28"
			},
			"board": [
				{
					"$": {
						"type": "HVC-NROM-256",
						"pcb": "HVC-NROM-256K-02",
						"mapper": "0"
					},
					"prg": [
						{
							"$": {
								"name": "TFS-PC-0 PRG",
								"size": "32k",
								"crc": "106AF52A",
								"sha1": "E3934E25746B7EAE9AA51E157DB74DB248B62363"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "TFS-PC-0 CHR",
								"size": "8k",
								"crc": "9611C585",
								"sha1": "7E94F760D65CA8A8A2DA1192CADFDB59343A0FC2"
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
