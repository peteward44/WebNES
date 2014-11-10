this.NesDb = this.NesDb || {};

NesDb[ 'F60102AB3B1470ECFBB7FE31FD9392E6B4BFBFBA' ] = {
	"$": {
		"name": "Megami Tensei: Digital Devil Story",
		"altname": "女神転生 デジタルデビル物語",
		"class": "Licensed",
		"subclass": "3rd-Party",
		"catalog": "NAM-MT-4900",
		"publisher": "Namco",
		"developer": "Atlus",
		"region": "Japan",
		"players": "1",
		"date": "1987-09-11"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "5393D949",
				"sha1": "F60102AB3B1470ECFBB7FE31FD9392E6B4BFBFBA",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-11-30"
			},
			"board": [
				{
					"$": {
						"type": "NAMCOT-3446",
						"pcb": "3446",
						"mapper": "76"
					},
					"prg": [
						{
							"$": {
								"name": "NAMCOTMTPR",
								"size": "128k",
								"crc": "9F3DA143",
								"sha1": "0613420B23160D3B2A46DC0B83C60B10A0A74138"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NAMCOTMTCH",
								"size": "128k",
								"crc": "73F1E3CF",
								"sha1": "9CC23137887BB8A4F8A2AAA62D0AC69924BBFDD8"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "108"
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
