this.NesDb = this.NesDb || {};

NesDb[ 'BC6F5A884FD31FE6B4439E83AD6C2A29D038E545' ] = {
	"$": {
		"name": "Holy Diver",
		"altname": "ホーリーダイヴァー",
		"class": "Licensed",
		"subclass": "3rd-Party",
		"catalog": "IF-12",
		"publisher": "Irem",
		"developer": "Irem",
		"region": "Japan",
		"players": "1",
		"date": "1989-04-28"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "BA51AC6F",
				"sha1": "BC6F5A884FD31FE6B4439E83AD6C2A29D038E545",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2010-02-07"
			},
			"board": [
				{
					"$": {
						"type": "IREM-HOLYDIVER",
						"pcb": "UNK-IF-12",
						"mapper": "78"
					},
					"prg": [
						{
							"$": {
								"name": "IRFM P-1",
								"size": "128k",
								"crc": "BC1197A4",
								"sha1": "57E96D24D2AA7627A21FD6B5657C0F603E8711D7"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "IREM C-1",
								"size": "128k",
								"crc": "BE4A4753",
								"sha1": "D88445DAD113942034C9E5411C4A77B09D050D56"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "74xx00"
							}
						},
						{
							"$": {
								"type": "74xx161"
							}
						},
						{
							"$": {
								"type": "74xx161"
							}
						},
						{
							"$": {
								"type": "74xx245"
							}
						},
						{
							"$": {
								"type": "74xx32"
							}
						}
					]
				}
			]
		}
	]
};
