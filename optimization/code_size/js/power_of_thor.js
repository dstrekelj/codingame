for(I=readline().split(" ");;)F=I[2]-I[0],G=I[3]-I[1],print((G<0?I[3]++>=18?"":"S":G>0?I[3]--<0?"":"N":"")+(F<0?I[2]++>=40?"":"E":F>0?I[2]--<0?"":"W":""));