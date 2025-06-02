# Read the input
dataSize = int(input())
transferSpeed = int(input())
N = int(input())

archivers = []
for _ in range(N):
    processingSpeed, compressionRate = map(int, input().split())
    archivers.append((processingSpeed, compressionRate))

# Initialize the minimum time with the time taken without compression
minTime = math.ceil(dataSize / transferSpeed)

# Calculate the time for each archiver option and choose the minimum
for processingSpeed, compressionRate in archivers:
    compressedSize = dataSize * compressionRate / 100
    processingTime = dataSize / processingSpeed
    extractionTime = compressedSize / transferSpeed
    totalTime = math.ceil(processingTime + extractionTime)
    minTime = min(minTime, totalTime)

# Print the result/minimal time needed
print(minTime)