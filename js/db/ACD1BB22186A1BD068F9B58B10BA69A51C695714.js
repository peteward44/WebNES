this.NesDb = this.NesDb || {};

NesDb[ 'ACD1BB22186A1BD068F9B58B10BA69A51C695714' ] = {
	"$": {
		"name": "Pinball Quest",
		"altname": "ピンボールクエスト",
		"class": "Licensed",
		"subclass": "3rd-Party",
		"catalog": "JF-26",
		"publisher": "Jaleco",
		"developer": "TOSE Software",
		"region": "Japan",
		"players": "1",
		"date": "1989-12-15"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "475CDBFE",
				"sha1": "ACD1BB22186A1BD068F9B58B10BA69A51C695714",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-11-28"
			},
			"board": [
				{
					"$": {
						"type": "JALECO-JF-17",
						"pcb": "JF-17",
						"mapper": "72"
					},
					"prg": [
						{
							"$": {
								"name": "MR-89019-PRG",
								"size": "128k",
								"crc": "55C3589C",
								"sha1": "4D0A98CF396C342565AF3A2815AFD3D4F05477C5"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "MR-89019-CHR",
								"size": "128k",
								"crc": "1FCDD252",
								"sha1": "29A8CFCFBE90774A34BB3A1DC6E20DAB08A251B8"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "74xx161"
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
								"type": "74xx32"
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
