import mongoose from 'mongoose'

const rincianSchema = mongoose.Schema(
  {
    jenis: {
      type: String,
      required: true,
    },
    nominal: {
      type: Number,
      required: true,
      default: 0,
    },
    keterangan: {
      type: String,
      required: true,
    },

    author: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
)

const laporanSchema = mongoose.Schema(
  {
    date: {
      type: String,
      required: true,
    },
    rincian: [rincianSchema],
    total: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
)

const Laporan = mongoose.model('Laporan', laporanSchema)

export default Laporan
