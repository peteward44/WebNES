this.NesDb = this.NesDb || {};

NesDb[ 'F7C8999719D5A8B8F795F9F3D9650740DEFBDBF5' ] = {
	"$": {
		"name": "Action 52",
		"class": "Unlicensed",
		"subclass": "Multi-cart",
		"catalog": "ACT-52",
		"publisher": "Active Enterprises",
		"developer": "Active Enterprises",
		"region": "USA",
		"players": "1",
		"date": "1991"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"revision": "A",
				"crc": "51C0B27E",
				"sha1": "F7C8999719D5A8B8F795F9F3D9650740DEFBDBF5",
				"dump": "ok",
				"dumper": "Mark_K",
				"datedumped": "2011-12-06"
			},
			"board": [
				{
					"$": {
						"type": "MLT-ACTION52",
						"pcb": "023-N507",
						"mapper": "228"
					},
					"prg": [
						{
							"$": {
								"id": "0",
								"name": "ACTION52 PGM-A",
								"size": "512k",
								"crc": "A51212FD",
								"sha1": "746B226FFC8AA717E2F95A8BBCBDB92188A96CD2"
							}
						},
						{
							"$": {
								"id": "1",
								"name": "ACTION52 PGM-B",
								"size": "512k",
								"crc": "476D0B72",
								"sha1": "CF481DEB81A03210E615F6BD942FE9560C102D39"
							}
						},
						{
							"$": {
								"id": "2",
								"name": "ACTION52 PGM-C",
								"size": "512k",
								"crc": "2568DBA6",
								"sha1": "DA29C98C4048A9AD2AC0D5017D4368C931EBBF8E"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "ACTION52 CHR-A",
								"size": "512k",
								"crc": "596442EC",
								"sha1": "DC31DC0870E393FC46494B5E386AB08E769AC514"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "4520"
							}
						},
						{
							"$": {
								"type": "74xx273"
							}
						},
						{
							"$": {
								"type": "74xx273"
							}
						},
						{
							"$": {
								"type": "PAL16L8"
							}
						},
						{
							"$": {
								"type": "PAL16L8"
							}
						}
					],
					"cic": [
						{
							"$": {
								"type": "CIC Stun"
							}
						}
					]
				}
			]
		},
		{
			"$": {
				"system": "NES-NTSC",
				"revision": "A",
				"crc": "51C0B27E",
				"sha1": "F7C8999719D5A8B8F795F9F3D9650740DEFBDBF5",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-01-14"
			},
			"board": [
				{
					"$": {
						"type": "MLT-ACTION52",
						"pcb": "023-N507 REV. A",
						"mapper": "228"
					},
					"prg": [
						{
							"$": {
								"id": "0",
								"name": "ACTION52 PGM-A",
								"size": "512k",
								"crc": "A51212FD",
								"sha1": "746B226FFC8AA717E2F95A8BBCBDB92188A96CD2"
							}
						},
						{
							"$": {
								"id": "1",
								"name": "ACTION52 PGM-B",
								"size": "512k",
								"crc": "476D0B72",
								"sha1": "CF481DEB81A03210E615F6BD942FE9560C102D39"
							}
						},
						{
							"$": {
								"id": "2",
								"name": "ACTION52 PGM-C",
								"size": "512k",
								"crc": "2568DBA6",
								"sha1": "DA29C98C4048A9AD2AC0D5017D4368C931EBBF8E"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "ACTION52 CHR-A",
								"size": "512k",
								"crc": "596442EC",
								"sha1": "DC31DC0870E393FC46494B5E386AB08E769AC514"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "74xx273"
							}
						},
						{
							"$": {
								"type": "74xx273"
							}
						},
						{
							"$": {
								"type": "GAL16V8S"
							}
						},
						{
							"$": {
								"type": "PIC16C54"
							}
						}
					],
					"cic": [
						{
							"$": {
								"type": "CIC Stun"
							}
						}
					]
				}
			]
		}
	]
};
