this.NesDb = this.NesDb || {};

NesDb[ '08F7C1A9B2061E0C3D12EB960A48D022007C6252' ] = {
	"$": {
		"name": "Operation Secret Storm",
		"class": "Unlicensed",
		"catalog": "CDR-OM-81023",
		"publisher": "Color Dreams",
		"developer": "Color Dreams",
		"region": "USA",
		"players": "1",
		"date": "1991"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "EA113128",
				"sha1": "08F7C1A9B2061E0C3D12EB960A48D022007C6252",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-12-10"
			},
			"board": [
				{
					"$": {
						"type": "COLORDREAMS-74*377",
						"pcb": "UNK-COLORDREAMS-REVC",
						"mapper": "11"
					},
					"prg": [
						{
							"$": {
								"name": "SECRET STORM 512K PRG",
								"size": "64k",
								"crc": "32490787",
								"sha1": "AC52F208C0E859E27CE8AF9A46677AC47CFC0927"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "SECRET STORM 512K VID",
								"size": "64k",
								"crc": "3561E26C",
								"sha1": "5488F3D5BBE511BE397448287B3773C1DA63F0F2"
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
								"type": "7660"
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
