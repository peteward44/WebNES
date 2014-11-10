this.NesDb = this.NesDb || {};

NesDb[ '9B33666D28E16094CD140361A9375C9ED9E4DBA7' ] = {
	"$": {
		"name": "Guardic Gaiden",
		"altname": "ガーディック外伝",
		"class": "Licensed",
		"subclass": "3rd-Party",
		"catalog": "IF-08",
		"publisher": "Irem",
		"developer": "Compile",
		"region": "Japan",
		"players": "1",
		"date": "1987-02-05"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "DAD88CC5",
				"sha1": "9B33666D28E16094CD140361A9375C9ED9E4DBA7",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-10-03"
			},
			"board": [
				{
					"$": {
						"type": "IREM-UNROM",
						"pcb": "LROG016-00",
						"mapper": "2"
					},
					"prg": [
						{
							"$": {
								"size": "128k",
								"crc": "DAD88CC5",
								"sha1": "9B33666D28E16094CD140361A9375C9ED9E4DBA7"
							}
						}
					],
					"vram": [
						{
							"$": {
								"size": "8k"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "<74xx161>"
							}
						},
						{
							"$": {
								"type": "<74xx32>"
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
