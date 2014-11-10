this.NesDb = this.NesDb || {};

NesDb[ 'CE103FE6971E2F97B82F13B8011C592039F46265' ] = {
	"$": {
		"name": "Best Play Pro Yakyuu II, The",
		"altname": "ベストプレープロ野球II",
		"class": "Licensed",
		"catalog": "HSP-33",
		"publisher": "ASCII",
		"developer": "ASCII",
		"region": "Japan",
		"players": "2",
		"date": "1990-03-30"
	},
	"peripherals": [
		{
			"device": [
				{
					"$": {
						"type": "turbofile",
						"name": "TurboFile"
					}
				}
			]
		}
	],
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "C2EF3422",
				"sha1": "CE103FE6971E2F97B82F13B8011C592039F46265",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-07-22"
			},
			"board": [
				{
					"$": {
						"type": "HVC-SNROM",
						"pcb": "HVC-SNROM-09",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "HSP-33-0 PRG",
								"size": "256k",
								"crc": "C2EF3422",
								"sha1": "CE103FE6971E2F97B82F13B8011C592039F46265"
							}
						}
					],
					"wram": [
						{
							"$": {
								"size": "8k",
								"battery": "1"
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
								"type": "MMC1B2"
							}
						}
					]
				}
			]
		}
	]
};
