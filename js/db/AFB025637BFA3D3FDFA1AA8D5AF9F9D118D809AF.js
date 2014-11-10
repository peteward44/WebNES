this.NesDb = this.NesDb || {};

NesDb[ 'AFB025637BFA3D3FDFA1AA8D5AF9F9D118D809AF' ] = {
	"$": {
		"name": "Matendouji",
		"altname": "魔天童子",
		"class": "Licensed",
		"catalog": "BTC-7M",
		"publisher": "Bothtec (Quest)",
		"developer": "Bothtec (Quest)",
		"region": "Japan",
		"players": "1",
		"date": "1990-08-24"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "F2594374",
				"sha1": "AFB025637BFA3D3FDFA1AA8D5AF9F9D118D809AF",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2010-01-16"
			},
			"board": [
				{
					"$": {
						"type": "HVC-TLROM",
						"pcb": "HVC-TLROM-04",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "BTC-7M-0 PRG",
								"size": "128k",
								"crc": "8685F366",
								"sha1": "DEE2568A0A856B3B2AC3C1EFE80D043B6C6FF6C2"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "BTC-7M-0 CHR",
								"size": "128k",
								"crc": "E87AA5EF",
								"sha1": "F9F71A0244F2D6E47EF8C4D7F69B384909D7E6D4"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC3B"
							}
						}
					]
				}
			]
		}
	]
};
