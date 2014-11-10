this.NesDb = this.NesDb || {};

NesDb[ 'C8CA009CFB56EDB86ACD8BB8F05D96D19132AD66' ] = {
	"$": {
		"name": "Déjà Vu",
		"class": "Licensed",
		"catalog": "NES-DG-USA",
		"publisher": "Kemco",
		"developer": "Icom Simulations",
		"region": "USA",
		"players": "1",
		"date": "1990-12"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "43D01C10",
				"sha1": "C8CA009CFB56EDB86ACD8BB8F05D96D19132AD66",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-03-22"
			},
			"board": [
				{
					"$": {
						"type": "NES-TKROM",
						"pcb": "NES-TKROM-01",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "NES-DG-0 PRG",
								"size": "128k",
								"crc": "A479B08C",
								"sha1": "73608FDA9A10CD91DACAF4B997D9778A9862F6F4"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-DG-0 CHR",
								"size": "256k",
								"crc": "CF308E24",
								"sha1": "6BC998802D586AFA3FC0CD706A2A659CA1646400"
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
								"type": "MMC3B"
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
