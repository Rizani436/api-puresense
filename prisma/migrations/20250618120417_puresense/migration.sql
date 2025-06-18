-- CreateTable
CREATE TABLE "sensor" (
    "id" TEXT NOT NULL,
    "puresenseId" TEXT NOT NULL,
    "voltage" DOUBLE PRECISION NOT NULL,
    "analogReadValue" INTEGER NOT NULL,
    "digitalReadValue" INTEGER NOT NULL,
    "NTU" DOUBLE PRECISION NOT NULL,
    "statusKejernihan" TEXT NOT NULL,

    CONSTRAINT "sensor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "puresense" (
    "id" TEXT NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "puresense_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "sensor" ADD CONSTRAINT "sensor_puresenseId_fkey" FOREIGN KEY ("puresenseId") REFERENCES "puresense"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
