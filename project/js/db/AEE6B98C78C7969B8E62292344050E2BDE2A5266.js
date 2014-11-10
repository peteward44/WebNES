this.NesDb = this.NesDb || {};

NesDb[ 'AEE6B98C78C7969B8E62292344050E2BDE2A5266' ] = {
	"$": {
		"name": "Fuzzical Fighter",
		"altname": "ファジカルファイター",
		"class": "Licensed",
		"catalog": "SEI-1E",
		"publisher": "Sigma Enterprises",
		"developer": "Make Software",
		"region": "Japan",
		"players": "1",
		"date": "1991-05-17"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "5E24EEDA",
				"sha1": "AEE6B98C78C7969B8E62292344050E2BDE2A5266",
				"dump": "ok",
				"dumper": "aodinets",
				"datedumped": "2012-03-05"
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
								"name": "SEI-1E-0 PRG",
								"size": "128k",
								"crc": "C05BBDFC",
								"sha1": "F754B2FD9633370691185BDEE6803CEDD947163A"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "SEI-1E-0 CHR",
								"size": "128k",
								"crc": "C077EAF4",
								"sha1": "6CF9DE800ADEBD46D4D6EE4D77761EAFA31D1294"
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
