this.NesDb = this.NesDb || {};

NesDb[ 'C29DA974D39A76B7D1134A81CADAF00B51208151' ] = {
	"$": {
		"name": "Kunio-kun no Nekketsu Soccer League",
		"altname": "くにおくんの熱血サッカーリーグ",
		"class": "Licensed",
		"catalog": "TJC-NV",
		"publisher": "Technos",
		"developer": "Technos",
		"region": "Japan",
		"players": "2",
		"date": "1993-04-23"
	},
	"peripherals": [
		{
			"device": [
				{
					"$": {
						"type": "fourplayer",
						"name": "4-Player Adapter"
					}
				}
			]
		}
	],
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "4B5177E9",
				"sha1": "C29DA974D39A76B7D1134A81CADAF00B51208151",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-11-11"
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
								"name": "TJC-NV-0 PRG",
								"size": "128k",
								"crc": "DEDDD5E5",
								"sha1": "61AB2DAC2439D27C559780878FF54759A2D62F7A"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "TJC-NV-0 CHR",
								"size": "128k",
								"crc": "72F2C864",
								"sha1": "EC69A64496547CCB0374446AA22409999A959DC9"
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
