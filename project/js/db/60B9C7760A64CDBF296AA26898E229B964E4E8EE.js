this.NesDb = this.NesDb || {};

NesDb[ '60B9C7760A64CDBF296AA26898E229B964E4E8EE' ] = {
	"$": {
		"name": "Dungeon & Magic: Sword of the Element",
		"altname": "ダンジョン＆マジック ソード オブ エレメント",
		"class": "Licensed",
		"catalog": "NAT-DM",
		"publisher": "Natsume",
		"developer": "Natsume",
		"region": "Japan",
		"players": "1",
		"date": "1989-11-10"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "459D0C2A",
				"sha1": "60B9C7760A64CDBF296AA26898E229B964E4E8EE",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2012-05-06"
			},
			"board": [
				{
					"$": {
						"type": "HVC-SKROM",
						"pcb": "HVC-SKROM-05",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "NAT-DM-0 PRG",
								"size": "128k",
								"crc": "FDA76F70",
								"sha1": "C77DE44CBA593184BE2B10F9565DE414375D8D84"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NAT-DM-0 CHR",
								"size": "128k",
								"crc": "A6D819E1",
								"sha1": "FB826E15B221C4D2920C31F0669734C298622EDD"
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
