-- CreateTable
CREATE TABLE "User" (
    "description" TEXT,
    "first_name" TEXT,
    "id" TEXT NOT NULL,
    "last_name" TEXT,
    "location" TEXT,
    "password" TEXT NOT NULL,
    "roles" TEXT[],
    "telephone_number" TEXT,
    "username" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "JobApplicant" (
    "id" TEXT NOT NULL,
    "isAccepted" BOOLEAN,
    "job_offering_idId" TEXT NOT NULL,
    "user_idId" TEXT NOT NULL,

    CONSTRAINT "JobApplicant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "JobOffering" (
    "author_idId" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "id" TEXT NOT NULL,
    "max_salary" INTEGER,
    "min_salary" INTEGER,
    "position_level" TEXT,
    "title" TEXT NOT NULL,
    "working_mode" TEXT NOT NULL,

    CONSTRAINT "JobOffering_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HousingOffering" (
    "address" TEXT NOT NULL,
    "author_idId" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "id" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "rooms_number" INTEGER NOT NULL,
    "size" DOUBLE PRECISION NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "HousingOffering_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HousingApplicant" (
    "house_offeringI_idId" TEXT NOT NULL,
    "id" TEXT NOT NULL,
    "isAccepted" BOOLEAN,
    "user_idId" TEXT NOT NULL,

    CONSTRAINT "HousingApplicant_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- AddForeignKey
ALTER TABLE "JobApplicant" ADD CONSTRAINT "JobApplicant_job_offering_idId_fkey" FOREIGN KEY ("job_offering_idId") REFERENCES "JobOffering"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JobApplicant" ADD CONSTRAINT "JobApplicant_user_idId_fkey" FOREIGN KEY ("user_idId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JobOffering" ADD CONSTRAINT "JobOffering_author_idId_fkey" FOREIGN KEY ("author_idId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HousingOffering" ADD CONSTRAINT "HousingOffering_author_idId_fkey" FOREIGN KEY ("author_idId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HousingApplicant" ADD CONSTRAINT "HousingApplicant_house_offeringI_idId_fkey" FOREIGN KEY ("house_offeringI_idId") REFERENCES "HousingOffering"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HousingApplicant" ADD CONSTRAINT "HousingApplicant_user_idId_fkey" FOREIGN KEY ("user_idId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
