this.NesDb = this.NesDb || {};

NesDb[ '56C3D55654D0E837082978505653F6E1E0D52D6F' ] = {
	"$": {
		"name": "After Burner",
		"class": "Unlicensed",
		"catalog": "TGN-011-AB",
		"publisher": "Tengen",
		"developer": "Sega",
		"portdeveloper": "Sunsoft",
		"region": "USA",
		"players": "1",
		"date": "1989"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "F699EE7E",
				"sha1": "56C3D55654D0E837082978505653F6E1E0D52D6F",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-01-02"
			},
			"board": [
				{
					"$": {
						"type": "TENGEN-800042",
						"pcb": "800042-01 REV B",
						"mapper": "68"
					},
					"prg": [
						{
							"$": {
								"name": "335011-1011 ABPRG",
								"size": "128k",
								"crc": "B938B7E9",
								"sha1": "7AF030B3CBE5721D0D49D935FE5FD26C795D81A1"
							}
						}
					],
					"chr": [
						{
							"$": {
								"id": "0",
								"name": "335011-1022 ABCHL",
								"size": "128k",
								"crc": "1EC2140B",
								"sha1": "CAA492B62BA15C9E114E1281D43B8590480DCAE9"
							}
						},
						{
							"$": {
								"id": "1",
								"name": "335011-1032 ABCHH",
								"size": "128k",
								"crc": "38F01063",
								"sha1": "A73593E231E9EC6C7A3490F69DD580FB683B93FB"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "337007"
							}
						},
						{
							"$": {
								"type": "74xx02"
							}
						}
					],
					"cic": [
						{
							"$": {
								"type": "337002"
							}
						}
					]
				}
			]
		}
	]
};
