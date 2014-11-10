this.NesDb = this.NesDb || {};

NesDb[ 'CB130F4E4CAE6DDB112CFE96024BE1D3292DD84B' ] = {
	"$": {
		"name": "Moero!! Pro Tennis",
		"altname": "燃えろ！！プロテニス",
		"class": "Licensed",
		"subclass": "3rd-Party",
		"catalog": "JF-17",
		"publisher": "Jaleco",
		"developer": "TOSE Software",
		"region": "Japan",
		"players": "2",
		"date": "1988-04-15"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "6C61B622",
				"sha1": "CB130F4E4CAE6DDB112CFE96024BE1D3292DD84B",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-12-06"
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
								"size": "128k",
								"crc": "598A7398",
								"sha1": "938DA155ABCB0192189B5B511A673C897839C07B"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "JF-17 CHR",
								"size": "128k",
								"crc": "43E86EFA",
								"sha1": "5AABA33768EAF8BC66090F28A2AECB89E496B135"
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
