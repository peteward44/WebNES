this.NesDb = this.NesDb || {};

NesDb[ '993B06A960B8EE43A2D5B80AD33D384446FD6317' ] = {
	"$": {
		"name": "Super Cartridge Version 1: 4 in 1",
		"class": "Unlicensed",
		"subclass": "Multi-cart",
		"catalog": "TC-SC1",
		"publisher": "Sachen / Joy Van",
		"developer": "Sachen / Joy Van",
		"region": "Taiwan",
		"players": "1",
		"date": "0000"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "FB3439FC",
				"sha1": "993B06A960B8EE43A2D5B80AD33D384446FD6317",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-07-04"
			},
			"board": [
				{
					"$": {
						"type": "SACHEN-8259A",
						"pcb": "TC-30-2",
						"mapper": "141"
					},
					"prg": [
						{
							"$": {
								"name": "<EPOXY>",
								"size": "128k",
								"crc": "F3B48944",
								"sha1": "AA801E57925D74B83FE5ABC3D294FE5AEB314817"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "<EPOXY>",
								"size": "256k",
								"crc": "A8AF3B2D",
								"sha1": "50B22ACB0BEB8EF89E58F9456F7CC84492CBDEF4"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "<SA8259A>"
							}
						}
					]
				}
			]
		}
	]
};
