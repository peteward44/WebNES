this.NesDb = this.NesDb || {};

NesDb[ '53D58E3AC21AB34ECE7854334140216A489499B8' ] = {
	"$": {
		"name": "Chester Field: Ankoku Shin e no Chousen",
		"altname": "チェスター・フィールド  箱・説明書無し",
		"class": "Licensed",
		"catalog": "VIC-CF",
		"publisher": "Vic Tokai",
		"developer": "Vic Tokai",
		"region": "Japan",
		"players": "1",
		"date": "1987-07-30"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"prototype": "1",
				"crc": "53328FC4",
				"sha1": "53D58E3AC21AB34ECE7854334140216A489499B8",
				"dump": "ok",
				"dumper": "kevtris",
				"datedumped": "2012-04-16"
			},
			"board": [
				{
					"$": {
						"type": "HVC-UNROM",
						"pcb": "UNK-HVC-023-PROTO",
						"mapper": "2"
					},
					"prg": [
						{
							"$": {
								"id": "0",
								"name": "1",
								"size": "32k",
								"crc": "ED3A98DE",
								"sha1": "A4676E2F3E7B56894493C62876D68527D589FD3A"
							}
						},
						{
							"$": {
								"id": "1",
								"name": "2",
								"size": "32k",
								"crc": "D859983B",
								"sha1": "D665521BDFF66B040F95424E537A039272AA1243"
							}
						},
						{
							"$": {
								"id": "2",
								"name": "3",
								"size": "32k",
								"crc": "AF624FC1",
								"sha1": "E88EDFE348266C9FEF3EF9A8F6A41497AF084D07"
							}
						},
						{
							"$": {
								"id": "3",
								"name": "4",
								"size": "32k",
								"crc": "485ABE58",
								"sha1": "9CD9E265E5DA6818ADD310BE6ABBF261299C5CD2"
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
								"type": "74xx139"
							}
						},
						{
							"$": {
								"type": "74xx161"
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
