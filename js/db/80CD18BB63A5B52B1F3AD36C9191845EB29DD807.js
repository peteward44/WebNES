this.NesDb = this.NesDb || {};

NesDb[ '80CD18BB63A5B52B1F3AD36C9191845EB29DD807' ] = {
	"$": {
		"name": "Death Race",
		"class": "Unlicensed",
		"catalog": "AGCI-DR",
		"publisher": "AGCI",
		"developer": "Exidy",
		"portdeveloper": "AGCI",
		"region": "USA",
		"players": "1",
		"date": "1990"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "5CAA3E61",
				"sha1": "80CD18BB63A5B52B1F3AD36C9191845EB29DD807",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-12-06"
			},
			"board": [
				{
					"$": {
						"type": "AGCI-50282",
						"pcb": "50282",
						"mapper": "144"
					},
					"prg": [
						{
							"$": {
								"name": "DRACEPRG",
								"size": "64k",
								"crc": "7ED91F80",
								"sha1": "D33248186697E488021358369E6407B5D85526FC"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "DRACECHR",
								"size": "64k",
								"crc": "8084BB4F",
								"sha1": "3DC3BAFE5A028F85C0589EC1FABA551E50C69535"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "74xx377"
							}
						}
					],
					"cic": [
						{
							"$": {
								"type": "CIC Stun"
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
