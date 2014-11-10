this.NesDb = this.NesDb || {};

NesDb[ 'ABB50CDC61112A03FC4089E30C49F82C8FDDA790' ] = {
	"$": {
		"name": "Goal!",
		"class": "Licensed",
		"catalog": "NES-JG-USA",
		"publisher": "Jaleco",
		"developer": "TOSE Software",
		"region": "USA",
		"players": "2",
		"date": "1989-10"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "84148F73",
				"sha1": "ABB50CDC61112A03FC4089E30C49F82C8FDDA790",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-03-25"
			},
			"board": [
				{
					"$": {
						"type": "NES-SL3ROM",
						"pcb": "NES-SL3ROM-01",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "NES-JG-0 PRG",
								"size": "256k",
								"crc": "D78729FD",
								"sha1": "6F06A1C1EFE981BB9CEEBBB55F39D8BA200DB140"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-JG-0 CHR",
								"size": "128k",
								"crc": "13CDB249",
								"sha1": "ACC4F9FAAE5B7A47AA4D1285E0E5FBDCEB9659C1"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "74xx32"
							}
						},
						{
							"$": {
								"type": "MMC1B2"
							}
						}
					],
					"cic": [
						{
							"$": {
								"type": "6113B1"
							}
						}
					]
				}
			]
		}
	]
};
